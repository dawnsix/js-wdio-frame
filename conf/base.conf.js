import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: ['../test/specs/*'],
  exclude: [],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './shots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    grep: process.env.MOCHA_GREP,
    parallelMode: true,
    timeout: 60000,
  },
};
