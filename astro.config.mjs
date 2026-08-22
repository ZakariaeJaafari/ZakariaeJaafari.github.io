// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://zakariaejaafari.github.io",
  trailingSlash: "always",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-GB",
          fr: "fr-FR",
          ar: "ar-MA",
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
