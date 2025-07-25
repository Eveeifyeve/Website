import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx()],

  experimental: {
      liveContentCollections: true,
    },

  vite: {
    plugins: [tailwindcss()]
  }
});