# WebdriverIO_Cucumber

Step 1: npm init -y

Step 2: npm init wdio

? A project named "webdriverio_cucumber" was detected at "C:\Users\meteoriQs_user3\WebdriverIO_Cucumber", correct? Yes

? What type of testing would you like to do? E2E Testing - of Web or Mobile Applications

? Where is your automation backend located? On my local machine

? Which environment you would like to automate? Web - web applications in the browser

? With which browser should we start? Chrome, Firefox

? Which framework do you want to use? Cucumber (https://cucumber.io/)

? Do you want to use a compiler? No!

? Do you want WebdriverIO to autogenerate some test files? Yes

? What should be the location of your feature files? C:\Users\meteoriQs_user3\WebdriverIO_Cucumber\features\**\*.feature

? What should be the location of your step definitions? C:\Users\meteoriQs_user3\WebdriverIO_Cucumber\features\step-definitions\steps.js

? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes

? Where are your page objects located? C:\Users\meteoriQs_user3\WebdriverIO_Cucumber\features\pageobjects\**\*.js

? Which reporter do you want to use? spec

? Do you want to add a plugin to your test setup?

? Do you want to add a service to your test setup?

? What is the base url? http://localhost

? Do you want me to run `npm install` Yes


Step 3: For cucumber report install

npm install wdio-cucumberjs-json-reporter --save-dev

npm install cucumber-html-reporter --save-dev


Step 4:  Configure the output directory and the language in your wdio.conf.js file:

    const cucumberJson = require('wdio-cucumberjs-json-reporter');

    exports.config = {
    // ...
      reporters: ["spec",
        // Like this with the default options, see the options below

        // OR like this if you want to set the folder and the language
        ['cucumberjs-json', {
            jsonFolder: './reporter/json/',
            language: 'en',
        },
        ],
     ],

Step 5:  Create an index.js and specify the options.

var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',     
        brandTitle: 'Final Test Summary',
        jsonDir: './reporter/json/',
        output: './reporter/cucumber-htmlreport.html',
        screenshotsDirectory: './reporter/screenshots',
        storeScreenshots: true,
        reportSuiteAsScenarios: true,
        failedSummaryReport: true,
        scenarioTimestamp: true,
        ignoreBadJsonFile: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome",
            "Platform": "Windows 11",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        },
        failedSummaryReport: true,
    };
    reporter.generate(options);
    

Step 6:   node index.js

🚀 Cucumber HTML report ./reporter/cucumber-htmlreport.html generated successfully 👍



