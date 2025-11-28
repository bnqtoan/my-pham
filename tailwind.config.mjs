/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Leafy Lab Palette
				leafy: {
					green: '#3A5A40',  // Primary Dark Green
					cream: '#FDFCF6',  // Background Cream
					sage: '#A3B18A',   // Secondary Soft Green
					accent: '#D97757', // Terracotta Accent
					brown: '#583101',  // Deep Brown Text
				},
				// Semantic mappings for compatibility
				bg: {
					DEFAULT: '#FDFCF6', // leafy-cream
					subtle: '#F7F5EB',
					elevated: '#FFFFFF',
					card: '#FFFFFF',
				},
				primary: {
					DEFAULT: '#3A5A40', // leafy-green
					light: '#A3B18A',   // leafy-sage
					dark: '#2A402D',
				},
				accent: {
					DEFAULT: '#D97757', // leafy-accent
					light: '#E89A7D',
					dark: '#B55D3F',
				},
				text: {
					DEFAULT: '#583101', // leafy-brown
					secondary: '#3A5A40', // leafy-green
					muted: 'rgba(88, 49, 1, 0.6)',
				},
				border: {
					DEFAULT: '#A3B18A', // leafy-sage
					light: 'rgba(163, 177, 138, 0.3)',
				},
			},
			fontFamily: {
				display: ['"Playfair Display"', 'serif'],
				sans: ['"Nunito"', 'sans-serif'],
				body: ['"Nunito"', 'sans-serif'],
			},
			borderRadius: {
				'4xl': '2rem',
				'5xl': '3rem',
			},
			boxShadow: {
				'soft': '0 10px 40px -10px rgba(58, 90, 64, 0.15)',
				'soft-hover': '0 20px 50px -10px rgba(58, 90, 64, 0.25)',
			},
		},
	},
	plugins: [],
}
