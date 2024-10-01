/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit", // Activar JIT
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				kaushan: ["Kaushan", "sans-serif"],
				spacemono: ["Spacemono", "monospace"],
				spacemonobold: ["SpacemonoBold", "monospace"],
			},
		},
	},
	plugins: [],
	safelist: [
		// Lista de clases para evitar que se purguen
		"sm:col-start-1",
		"sm:col-start-2",
		"sm:text-left",
		"sm:text-right",
		"sm:row-start-1",
		"sm:row-start-2",
		"sm:row-start-3",
		"sm:block",
		"sm:flex",
		"sm:justify-center",
		"sm:grid-rows-4"
	],
}
