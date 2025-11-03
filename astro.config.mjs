import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
	integrations: [
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
			apiOptions: {
				region: "EU",
			},
			bridge: {
				customParent: "https://app.storyblok.com",
			},
			components: {
				AllProjects: "storyblok/AllProjects",
				Button: "storyblok/Button",
				CtaLayout: "storyblok/CtaLayout",
				FeaturedProjects: "storyblok/FeaturedProjects",
				FormLayout: "storyblok/FormLayout",
				Header: "storyblok/Header",
				Hero: "storyblok/Hero",
				Page: "storyblok/Page",
				Project: "storyblok/Project",
				RichText: "storyblok/RichText",
			},
		}),
	],
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true,
		},
	},
});
