import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maui.umut-aslan.dev',
  trailingSlash: 'ignore',
  i18n: { locales: ['de', 'en'], defaultLocale: 'de', routing: { prefixDefaultLocale: false } },
  build: { inlineStylesheets: 'auto' },
});
