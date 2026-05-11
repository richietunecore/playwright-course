const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Test directory
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail build on CI if test.only is left
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI
  retries: process.env.CI ? 2 : 1,

  // Number of workers
  workers: process.env.CI ? 1 : 2,

  // Reporter
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  use: {
    // Base URL
    baseURL: 'https://practicetestautomation.com',

    // Browser options
    headless: true,
    viewport: { width: 1280, height: 720 },

    // Timeouts
    actionTimeout: 10000,
    navigationTimeout: 30000,

    // Screenshots & traces
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'on-first-retry',
  },

  // Global timeout per test
  timeout: 30000,

  // Global expect timeout
  expect: {
    timeout: 5000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});