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