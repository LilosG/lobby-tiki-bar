// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

const SITE_URL = "https://lobbytikibar.com";

export default defineConfig({
  site: SITE_URL,
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      // @ts-expect-error sitemap runtime accepts Date and string changefreq values
      serialize(item) {
        const url = item.url;

        if (url === `${SITE_URL}/` || url === SITE_URL) {
          return {
            ...item,
            changefreq: "weekly",
            priority: 1.0,
            lastmod: new Date(),
          };
        }
        if (/\/(menu|happy-hour|brunch|events)\/?$/.test(url)) {
          return {
            ...item,
            changefreq: "weekly",
            priority: 0.9,
            lastmod: new Date(),
          };
        }
        if (url.includes("/private-events")) {
          return {
            ...item,
            changefreq: "monthly",
            priority: 0.8,
            lastmod: new Date(),
          };
        }
        if (url.endsWith("/blog/")) {
          return {
            ...item,
            changefreq: "weekly",
            priority: 0.8,
            lastmod: new Date(),
          };
        }
        if (url.includes("/blog/")) {
          return {
            ...item,
            changefreq: "monthly",
            priority: 0.7,
            lastmod: new Date(),
          };
        }
        return {
          ...item,
          changefreq: "monthly",
          priority: 0.7,
          lastmod: new Date(),
        };
      },
    }),
    mdx(),
    keystatic(),
    react(),
  ],
});
