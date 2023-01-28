const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
    require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
    require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
    projectId: '5d6vxp',
    env: {
        secretcode: "TJIK0VVID0",
        signinUrl : "/login",
        profileUrl : "/profiles"
      },
    e2e: {
        async setupNodeEvents(on, config) {
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });

            on("file:preprocessor", bundler);
            await addCucumberPreprocessorPlugin(on, config);
        
            

            return config;
        },
        specPattern: "cypress/e2e/features/*.feature",
        baseUrl: "https://bl1nk.co/", //set the env url
        defaultCommandTimeout: 10000 ,
        chromeWebSecurity: false,
    
        
    },
});


//W71VZ3FHUK