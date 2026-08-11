// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@module-federation/nuxt"],
  experimental: {
    buildCache: false,
  },
  routeRules: {
    "/remoteEntry.js": { headers: { "Access-Control-Allow-Origin": "*" } },
  },
  moduleFederation: {
    config: {
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {},
      manifest: true,
      exposes: {
        // App-level Bridge export (in addition to auto component exposes)
        "./export-app": "./app/export-app.ts",
      },
    },
  },
  vite: {
    server: {
      hmr: { port: 24679 },
    },
  },
});
