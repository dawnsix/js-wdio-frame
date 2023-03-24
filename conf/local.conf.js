import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
    
    runner: 'local',
    specs: [
        '../test/specs/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true
    }],
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

    services: ['geckodriver']
}
