import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "#app-trend-snap": resolve(""),
  },
  components: [
    {
      path: "./components",
      prefix: "AppTrendSnap",
    },
  ],
  imports: {
    dirs: ["./stores/**"],
  },
  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  /**
   * Modules configuration
   */
  i18n: {
    lazy: true,
    langDir: "../locales",
    defaultLocale: "vi",
    locales: [
      { code: "en", file: "en.json" },
      { code: "vi", file: "vi.json" },
    ],
  },
});
