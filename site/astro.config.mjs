// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";

const { DOMAIN, BASE } = loadEnv(process.env.NODE_ENV || "", process.cwd(), "");

export default defineConfig({
  site: DOMAIN,
  base: BASE,
  integrations: [sitemap()],
});
