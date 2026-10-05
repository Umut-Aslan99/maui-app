#!/usr/bin/env bash
# maui.umut-aslan.dev:  ./ops.sh build | test | preview | deploy
set -euo pipefail
cd "$(dirname "$0")"
export GIT_SHA="${GIT_SHA:-$(git rev-parse --short HEAD 2>/dev/null || echo local)}"
IMAGE="umutaslan/maui-showcase:$GIT_SHA"
PW_IMAGE="mcr.microsoft.com/playwright:v1.63.0-noble"
NET="maui-test"

build() { docker compose build; }

test() {   # Playwright (desktop + mobile) against the production image with the real media volume
  build
  docker network create "$NET" >/dev/null 2>&1 || true
  docker rm -f maui-under-test >/dev/null 2>&1 || true
  docker run -d --rm --name maui-under-test --network "$NET" -v "$PWD/media:/usr/share/nginx/html/media:ro" "$IMAGE" >/dev/null
  trap 'docker rm -f maui-under-test >/dev/null 2>&1 || true' RETURN
  docker run --rm --ipc=host --network "$NET" -u "$(id -u):$(id -g)" -e HOME=/tmp -e CI=1 \
    -e BASE_URL=http://maui-under-test -v "$PWD/site:/app" -w /app "$PW_IMAGE" \
    sh -c 'npm ci --no-audit --no-fund --ignore-scripts --silent && npx playwright test'
}

preview() {
  build
  docker rm -f maui-preview >/dev/null 2>&1 || true
  docker run -d --rm --name maui-preview -p 127.0.0.1:8089:80 -v "$PWD/media:/usr/share/nginx/html/media:ro" "$IMAGE" >/dev/null
  echo "→ http://127.0.0.1:8089"
}

deploy() { test; docker compose up -d --remove-orphans; docker compose ps; }

"${1:-test}"
