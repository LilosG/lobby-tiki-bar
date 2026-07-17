// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

const SITE_URL = 'https://lobbytikibar.com';

export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url;
        const lastmod = /** @type {string} */ (/** @type {unknown} */ (new Date()));
        const weekly = /** @type {any} */ ('weekly');
        const monthly = /** @type {any} */ ('monthly');

        if (url === `${SITE_URL}/` || url === SITE_URL) {
          return { ...item, changefreq: weekly, priority: 1.0, lastmod };
        }
        if (/\/(menu|happy-hour|brunch|events)\/?$/.test(url)) {
          return { ...item, changefreq: weekly, priority: 0.9, lastmod };
        }
        if (url.includes('/private-events')) {
          return { ...item, changefreq: monthly, priority: 0.8, lastmod };
        }
        if (url.endsWith('/blog/')) {
          return { ...item, changefreq: weekly, priority: 0.8, lastmod };
        }
        if (url.includes('/blog/')) {
          return { ...item, changefreq: monthly, priority: 0.7, lastmod };
        }
        return { ...item, changefreq: monthly, priority: 0.7, lastmod };
      },
    }),
    mdx(),
  ],
});
