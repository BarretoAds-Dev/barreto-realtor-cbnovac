// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
import viteCompression from 'vite-plugin-compression';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';



export default defineConfig({
 
  prefetch: {
    defaultStrategy: 'viewport'
  },
  site: 'https://barretoads.dev', 
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: { enabled: true },
  }),
  integrations: [sitemap({
    filter: (page) => {
      // Solo incluye rutas que provienen de src/pages
      return !page.includes('/drafts/') && !page.includes('/private/');
    },
  }), tailwind({
    applyBaseStyles: false,
  }),  react({
    include: ['**/react/*'],
  }),
],
 
  vite: {
    build: {
      minify: 'esbuild',
      cssCodeSplit: true,
      rollupOptions: {
        treeshake: {
          moduleSideEffects: false,
        },
      },
    },
  
  plugins: [
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 0,
      deleteOriginFile: false,
      compressionOptions: { level: 11 },
      filter: /\.(js|mjs|json|css|html|svg|jsx|tsx|astro|txt|xml|mp4|webp|avif|png|jpe?g|gif)$/,
      verbose: false,
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 0,
      deleteOriginFile: false,
      compressionOptions: { level: 9 },
      filter: /\.(js|mjs|json|css|html|svg|jsx|tsx|astro|txt|xml|mp4|webp|avif|png|jpe?g|gif)$/,
      verbose: false,
    }),
  ],
  cacheDir: '.vite-cache',
},

});