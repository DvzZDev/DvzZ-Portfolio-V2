// @ts-check
import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

import playformCompress from "@playform/compress"

import sitemap from "@astrojs/sitemap"

export default defineConfig({
	site: "https://dvzz.es",
	integrations: [tailwind(), playformCompress(), sitemap()],
})
