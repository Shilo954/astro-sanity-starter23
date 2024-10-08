import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['cdn.sanity.io']
  },
  vite: {
    server: {
      hmr: {
        path: '/vite-hmr/'
      }
    },
    optimizeDeps: {
      exclude: ['fsevents']
    }
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), sanity(), react()],
  server: {
    port: 3000
  }
});