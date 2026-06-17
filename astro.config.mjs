// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ammc-betoplast.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'uz'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
