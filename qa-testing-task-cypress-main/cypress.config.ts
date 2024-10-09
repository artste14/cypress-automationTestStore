import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://demo-next-sap-contentful.alokai.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
