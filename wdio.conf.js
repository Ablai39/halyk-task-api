exports.config = {
    runner: 'local',
    specs: [
        './test/*.js'
    ],
    maxInstances: 1,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://demoqa.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
