const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

 // watchForFileChanges: false, // stops auto-executing test reruns after any change&save in the project



