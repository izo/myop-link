/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
	extend: {
	  colors: {
		primary: '#your-primary-color',
		secondary: '#your-secondary-color',
	  },
	},
  },
  plugins: [],
}