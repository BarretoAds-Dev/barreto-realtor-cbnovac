// postcss.config.js

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: [/^montserrat/, /^remixicon/], // Añade clases que no deben ser eliminadas
      },
    }),
    require('cssnano')({
      preset: [
        'advanced', // Configuración avanzada de cssnano
        {
          discardComments: { removeAll: true }, // Elimina todos los comentarios
          reduceTransforms: true, // Optimiza transformaciones como scale() o rotate()
          normalizeWhitespace: true, // Minimiza los espacios en blanco
          mergeLonghand: true, // Combina propiedades individuales (e.g., margin-top, margin-bottom -> margin)
          colormin: true, // Minimiza representaciones de colores (e.g., #ffffff -> #fff)
          normalizeUrl: true, // Normaliza y simplifica URLs
          autoprefixer: { grid: true }, // Soporte para grids en navegadores antiguos
          discardUnused: true, // Elimina propiedades no utilizadas en el CSS
          reduceIdents: false, // Mantiene identificadores únicos, especialmente útil para animaciones personalizadas
        },
      ],
    }),
  ],
};
