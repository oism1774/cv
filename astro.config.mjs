import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/config.ts';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // The root page is only a redirect to /en/.
      filter: (page) => page !== `${SITE_URL}/`,
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ru: 'ru', az: 'az' },
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
