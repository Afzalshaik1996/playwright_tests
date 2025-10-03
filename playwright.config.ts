import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Folder where tests are located
  testDir: './tests',

  retries: 2,   // number of times to retry failed tests
  use: {
    headless: true,
    trace: 'on-first-retry', // collect trace on first retry
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  // Run tests inside files in parallel
  fullyParallel: true,

  // Use HTML reporter
  reporter: [
    ['html', { outputFolder: 'reports/html-report', open: 'never' }]
  ],

  // Configure projects (browsers)
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

  // Optional: exclude non-test folders (your CodeDemos)
  // Playwright looks for *.spec.ts by default, but this ensures no noise
  testIgnore: ['**/CodeDemos/**'],
});
