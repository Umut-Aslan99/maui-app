import { test, expect } from '@playwright/test';

test('German page renders every section', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Global Penfriends');
  for (const id of ['why', 'tour', 'screens', 'tech', 'download']) await expect(page.locator(`#${id}`)).toBeAttached();
});

test('English page is a full translation', async ({ page }) => {
  await page.goto('/en/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { name: 'The video tour' })).toBeVisible();
});

test('choosing a chapter shows its explanation and comparison', async ({ page }) => {
  await page.goto('/');
  const inbox = page.locator('[data-chapter="inbox"]');
  await inbox.click();
  await expect(inbox).toHaveAttribute('aria-current', 'step');
  await expect(page.locator('#ch-inbox')).toBeVisible();
  await expect(page.locator('#ch-login')).toBeHidden();
  await expect(page.locator('#ch-inbox [data-zoom]')).toHaveCount(1);
});

test('chapter list follows video playback', async ({ page }) => {
  await page.goto('/');
  const canPlay = await page.evaluate(() => document.createElement('video').canPlayType('video/mp4; codecs="avc1.64001f"'));
  test.skip(!canPlay, 'this browser build has no H.264 decoder');
  const video = page.locator('[data-video]');
  await video.evaluate(async (v: HTMLVideoElement) => {
    if (v.readyState < 1) await new Promise((r) => v.addEventListener('loadedmetadata', r, { once: true }));
    v.currentTime = 300;
  });
  await expect(page.locator('[data-chapter="monetization"]')).toHaveAttribute('aria-current', 'step');
});

test('reference screenshots open in a lightbox', async ({ page }) => {
  await page.goto('/');
  await page.locator('#ch-login [data-zoom]').first().click();
  const dlg = page.locator('#lightbox');
  await expect(dlg).toBeVisible();
  await expect(dlg.locator('img')).toHaveJSProperty('complete', true);
  await page.keyboard.press('Escape');
  await expect(dlg).toBeHidden();
});

test('without JavaScript every chapter is readable', async ({ browser, baseURL }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto(baseURL + '/');
  await expect(page.locator('[data-detail]:visible')).toHaveCount(16);
  await ctx.close();
});

test('no screenshots with other members’ personal data are published', async ({ page }) => {
  await page.goto('/');
  const html = await page.content();
  for (const name of ['profile_1', 'profile_2', 'search_3']) expect(html).not.toContain(name);
});

test('APK and video are served correctly', async ({ request }) => {
  const apk = await request.head('/media/com.umutIT.globalpenfriends.apk');
  expect(apk.status()).toBe(200);
  expect(apk.headers()['content-type']).toBe('application/vnd.android.package-archive');
  expect(apk.headers()['content-disposition']).toContain('attachment');
  const video = await request.get('/media/globalpenfriends-demo.mp4', { headers: { range: 'bytes=0-1023' } });
  expect(video.status()).toBe(206); // range requests = seeking without downloading the whole file
});

test('download section has a QR code for phones', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#download .qr svg')).toBeAttached();
});

test('makes no third-party requests and sets no cookies', async ({ page, baseURL }) => {
  const foreign: string[] = [];
  page.on('request', (r) => { if (!r.url().startsWith(baseURL!) && !r.url().startsWith('data:')) foreign.push(r.url()); });
  await page.goto('/', { waitUntil: 'networkidle' });
  expect(foreign).toEqual([]);
  expect(await page.context().cookies()).toEqual([]);
});

test('no horizontal scrolling at any width', async ({ page }) => {
  for (const width of [360, 768, 1280]) {
    await page.setViewportSize({ width, height: 800 });
    await page.goto('/');
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), `at ${width}px`).toBeLessThanOrEqual(0);
  }
});
