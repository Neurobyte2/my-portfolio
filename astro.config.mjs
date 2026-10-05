// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.aliansar.dev',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});