/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ["./app", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				defaultText: "#1C0F13",
				primary: {
					dark: "#00708B",
					light: "#C0D6DF",
				},
				secondary: "#EAEAEA",
			},
		},
	},
	plugins: [],
};
