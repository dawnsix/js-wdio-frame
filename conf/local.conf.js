import * as dotenv from 'dotenv'
dotenv.config()

// https://chromedriver.chromium.org/
// https://github.com/mozilla/geckodriver/releases
// https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/

const drivers = {
    chrome: { version: '110.0.5481.77' },
    firefox: { version: 'latest' }, 
}



export const config = {

    capabilities: [{
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true
        },{
            maxInstances: 5,
            browserName: 'firefox',
            acceptInsecureCerts: true
        }
    ],
    
    runner: 'local',
    specs: [
        '../test/specs/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        //grep: process.env.MOCHA_GREP,
        parallelMode: true,
        timeout: 60000,
    },

    //services: ['chromedriver']
    services: [
        ['selenium-standalone', {
            logPath: 'logs',
            installArgs: { drivers: drivers },
            args: { drivers: drivers }
        }]
    ],
}
