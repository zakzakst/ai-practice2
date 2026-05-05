// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { DOMAIN, BASE } = loadEnv(process.env.NODE_ENV || "", process.cwd(), "");

export default defineConfig({
  site: DOMAIN,
  base: BASE,
});
