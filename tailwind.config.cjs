/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Roboto: ["Roboto", "sans-serif"],
				Inter: ["Inter", "sans-serif"],
				SourceSansPro: ["Source Sans Pro", "sans-serif"],
				SecularOne: ["Secular One", "sans-serif"],
			},
			backgroundImage: {
				waves: "url('/src/assets/waves.svg')",
			},
		},
	},
	plugins: [],
};
