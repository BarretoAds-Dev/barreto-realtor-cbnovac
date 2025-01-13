/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bodydark: '#131a26',
				fontlight: '#F9EBE0',
				colorcaution: '#DD0426',
				
			},
			fontFamily: {
				montserrat: ['"montserrat"', 'sans-serif'],
			  },
			  screens: {
				sm400: '565px', // Punto de ruptura para 400px
			  },
		
		},
	},
	corePlugins: {
		preflight: false, 
	},
	plugins: [],
	
};
