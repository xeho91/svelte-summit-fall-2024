import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
	],
	theme: {
		colors: {
			summit: "#4A1011",
			secondary: "#B83B3A",
		},
	},
});
