// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: { enabled: true },
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    build: {
      minify: 'esbuild',
      cssCodeSplit: true,
      rollupOptions: {
        plugins: [
        ],
      },
    },
    plugins: [
      viteCompression({
        algorithm: 'brotliCompress', // Algoritmo de compresión Brotli
        ext: '.br', // Extensión para archivos Brotli
        threshold: 0, // Comprime incluso los archivos pequeños
        deleteOriginFile: false, // No elimina los archivos originales
        compressionOptions: { level: 11 }, // Nivel de compresión
        filter: /\.(js|mjs|json|css|html|svg|jsx|tsx|astro|txt|xml|mp4|webp|avif|png|jpe?g|gif)$/, // Archivos a comprimir
        verbose: false, // Sin logs adicionales
      }),
      viteCompression({
        algorithm: 'gzip', // Algoritmo de compresión Gzip
        ext: '.gz', // Extensión para archivos Gzip
        threshold: 0, // Comprime incluso los archivos pequeños
        deleteOriginFile: false, // No elimina los archivos originales
        compressionOptions: { level: 9 }, // Nivel de compresión
        filter: /\.(js|mjs|json|css|html|svg|jsx|tsx|astro|txt|xml|mp4|webp|avif|png|jpe?g|gif)$/, // Archivos a comprimir
        verbose: false, // Sin logs adicionales
      }),
    ],
    cacheDir: '.vite-cache', // Directorio de caché para Vite
  },
});
