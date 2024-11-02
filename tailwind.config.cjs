/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
	extend: {
	  colors: {
		primary: '#0F172A',
		secondary: '#1E293B'
	  }
	}
  },
  plugins: [],
}