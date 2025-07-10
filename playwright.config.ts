import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path : path.resolve(__dirname , '.env')});



export default defineConfig({
  testDir: './tests',
  //timeout : 1 * 60 * 1000, // timout o sa dureze 1 min sa execute un test, daca dureaza mai mult de 1 min o sa fie terminatsi o sa apara test timeout
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 3,
  reporter: [
    ['html'], 
    //['json', { outputFile: 'json-test-report.json' }]
    ['allure-playwright'],

  ],

  use: {

    video: 'retain-on-failure',
    testIdAttribute: 'data-tab-item',
    //headless: true,
    trace: 'on',
    screenshot: 'on',

    // launchOptions : {

    //   args: ['--start-maximized']
    // }

  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    //{
    //   name: 'Edge',
    //   use: { ...devices['Desktop Edge'] },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    //{
    // name: 'webkit',
    // use: { ...devices['Desktop Safari'] },
    //},
  ],
});
