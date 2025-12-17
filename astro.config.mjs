// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuration minimale pour le support des scripts côté client
  experimental: {
    clientPrerender: true
  },
  vite: {
    // Configuration Vite minimale
    ssr: {
      noExternal: ['@astrojs/mdx']
    }
  }
});
