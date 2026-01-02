import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [["html", { open: "never" }]],
  use: {
    trace: "on", // optional but recommended
    screenshot: "only-on-failure",
    video: "retain-on-failure",

  },

  
  use: {
    launchOptions: { slowMo: 300 }, // optional: slow down actions for observation

  }
});
