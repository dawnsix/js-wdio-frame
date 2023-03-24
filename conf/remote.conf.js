import {  config as baseConfig } from './base.conf.js';

const parallelConfig = {
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        { browserstackLocal: true, opts: { forcelocal: false } },
      ],
    ],
    capabilities: [
      {
        browserName: 'Chrome',
        'bstack:options': {
          browserVersion: '103.0',
          os: 'Windows',
          osVersion: '11'
        }
      },
      {
        browserName: 'Firefox',
        'bstack:options': {
          browserVersion: '102.0',
          os: 'Windows',
          osVersion: '10'
        }
      },
      {
        browserName: 'Safari',
        'bstack:options': {
          browserVersion: '14.1',
          os: 'OS X',
          osVersion: 'Big Sur'
        }
      }
    ],
    commonCapabilities: {
      'bstack:options': {
        buildName: 'sherpa-wdio-ci-' + Date.now(),
      }
    },
    maxInstances: 10,
    parallels: 5
  };

  export const config = { ...baseConfig, ...parallelConfig };
  
  export const capsout = config.capabilities.forEach(function(caps) {
    for (var i in config.commonCapabilities)
      caps[i] = { ...caps[i], ...config.commonCapabilities[i] };
  });