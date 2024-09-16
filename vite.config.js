import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate", // Automatically updates service worker when a new version is available
			injectRegister: "auto", // Automatically injects the service worker registration
			devOptions: {
				enabled: true // Enable PWA in development mode for testing
			},
			manifest: {
				name: "Git Command Reference Guide",
				short_name: "Git Guide",
				description: "Welcome to the Git Command Reference Guide! This app provides a comprehensive list of Git commands along with descriptions, examples, and usage instructions. Whether you're a beginner or an experienced developer, this guide will help you efficiently navigate Git's powerful version control features.",
				theme_color: "#ffffff",
				background_color: "#ffffff",
				display: "standalone",
				start_url: "/",
				icons: [
					{
						src: "/git-icon.png", // You should place these icons in the public folder
						sizes: "256x256",
						type: "image/png"
					},
					{
						src: "/git-icon.png",
						sizes: "512x512",
						type: "image/png"
					}
				]
			}
		})
	],
	server: {
		host: "0.0.0.0"
	},
	build: {
		chunkSizeWarningLimit: 1600
	}
});
