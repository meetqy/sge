export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  content: {
    experimental: {
      clientDB: true,
    },
  },
  routeRules: {
    "/": { prerender: true },
  },
});
