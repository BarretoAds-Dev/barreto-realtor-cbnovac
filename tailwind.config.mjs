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
		},
	},
	corePlugins: {
		preflight: true, // Mantiene el preflight para eliminar estilos del navegador
	},
	plugins: [],
};
