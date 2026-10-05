/** Progressive enhancement: theme, scroll progress, reveal, the video tour, lightbox, copy buttons. */

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

function theme() {
  const root = document.documentElement;
  const resolve = () => root.dataset.theme ?? (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  const sync = () => (root.dataset.themeResolved = resolve());
  sync();
  document.getElementById('theme')?.addEventListener('click', () => {
    root.dataset.theme = resolve() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch {}
    sync();
  });
}

function progress() {
  const root = document.documentElement;
  const update = () => {
    const max = root.scrollHeight - innerHeight;
    root.style.setProperty('--progress', String(max > 0 ? Math.min(1, scrollY / max) : 0));
  };
  addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  update();
}

function reveal() {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (reduced() || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach((e) => io.observe(e));
}

/** Video tour: the chapter list follows playback, and any chapter or "play from here" button seeks. */
function tour() {
  const root = document.querySelector<HTMLElement>('[data-tour]');
  const video = root?.querySelector<HTMLVideoElement>('[data-video]');
  if (!root || !video) return;
  const buttons = [...root.querySelectorAll<HTMLButtonElement>('[data-chapter]')];
  const details = [...root.querySelectorAll<HTMLElement>('[data-detail]')];
  const starts = buttons.map((b) => Number(b.dataset.seek));
  const list = root.querySelector<HTMLElement>('[data-list]')!;
  let current = '';

  const show = (id: string) => {
    if (id === current) return;
    current = id;
    buttons.forEach((b) => (b.dataset.chapter === id ? b.setAttribute('aria-current', 'step') : b.removeAttribute('aria-current')));
    details.forEach((d) => (d.hidden = d.dataset.detail !== id));
    const active = buttons.find((b) => b.dataset.chapter === id)?.parentElement;
    if (active) {
      // Scroll only the chapter list, never the page.
      const horizontal = list.scrollWidth > list.clientWidth + 4;
      list.scrollTo(horizontal
        ? { left: active.offsetLeft - list.offsetLeft - 8, behavior: 'smooth' }
        : { top: active.offsetTop - list.offsetTop - list.clientHeight / 3, behavior: 'smooth' });
    }
  };

  video.addEventListener('timeupdate', () => {
    let i = starts.length - 1;
    while (i > 0 && video.currentTime < starts[i]!) i--;
    show(buttons[i]!.dataset.chapter!);
  });

  root.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-seek]');
    if (!btn) return;
    const seek = () => { video.currentTime = Number(btn.dataset.seek) + 0.05; video.play().catch(() => {}); };
    if (btn.dataset.chapter) show(btn.dataset.chapter);
    if (video.readyState >= 1) seek();
    else { video.addEventListener('loadedmetadata', seek, { once: true }); video.load(); }
  });
}

function lightbox() {
  const dlg = document.getElementById('lightbox') as HTMLDialogElement | null;
  if (!dlg) return;
  const img = dlg.querySelector('img')!;
  const cap = dlg.querySelector('figcaption')!;
  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('[data-zoom]');
    if (!el) return;
    img.src = el.dataset.zoom!;
    img.alt = el.dataset.caption ?? '';
    cap.textContent = el.dataset.caption ?? '';
    dlg.showModal();
  });
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg || (e.target as HTMLElement).closest('[data-close]')) dlg.close();
  });
}

function copy() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((b) => b.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(b.dataset.copy!);
      b.classList.add('copied');
      const span = b.querySelector('span')!;
      const text = span.textContent;
      span.textContent = '✓';
      setTimeout(() => { span.textContent = text; b.classList.remove('copied'); }, 1200);
    } catch {}
  }));
}

export function init() {
  theme();
  progress();
  reveal();
  tour();
  lightbox();
  copy();
}
