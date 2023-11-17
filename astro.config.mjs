import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://eveeiyeve.pages.dev',
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind()]
});

