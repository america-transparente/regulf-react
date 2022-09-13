/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#088d1b',
				secondary: '#94ca02',
			},
		},
	},
	plugins: [],
};
