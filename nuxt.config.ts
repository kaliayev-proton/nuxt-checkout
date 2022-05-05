import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  server: {
    port: 5000,
  },
  modules: ["@nuxt/ui"],
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
  },
});
