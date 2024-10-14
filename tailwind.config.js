const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			boxShadow: {
				top: `rgba(0, 0, 0, 0.1) 0px -1px 3px 0px`,
			},
		},
	},
	plugins: [nextui()],
	darkMode: 'class',
}
