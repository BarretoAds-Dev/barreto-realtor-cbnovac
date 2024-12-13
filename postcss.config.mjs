module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
    ],
  };
  