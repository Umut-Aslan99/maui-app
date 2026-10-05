import type { ImageMetadata } from 'astro';

// Screens from the demo video and reference shots of the original website, keyed by file name.
const load = (files: Record<string, { default: ImageMetadata }>) =>
  Object.fromEntries(Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace(/\.\w+$/, ''), mod.default]));

export const appShots = load(import.meta.glob<{ default: ImageMetadata }>('../assets/app/*.png', { eager: true }));
export const refShots = load(import.meta.glob<{ default: ImageMetadata }>('../assets/reference/*.png', { eager: true }));
