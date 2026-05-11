---
id: module-10-ci-cd
title: Module 10 - CI/CD Integration
sidebar_position: 10
---




# 🚀 Module 10 – CI/CD Integration

Running tests locally is great. Running them **reliably in CI (GitHub Actions, GitLab CI, Jenkins, Azure DevOps)** is what makes automation production-ready.

---

## ✅ Goals of CI for Playwright

- 🔁 **Run tests automatically** on every push / pull request  
- 🧪 **Run on Linux (fast + consistent)** with installed browsers  
- 🧩 **Capture reports, traces, screenshots, videos** as artifacts  
- 🛡️ **Handle flakiness** with retries, timeouts, and trace-on-retry  
- ✅ **Fail the pipeline** only when tests truly fail (not due to environment issues)

---

## ✅ Ready-to-Use: GitHub Actions Workflow

Create this file in your repo root (outside `playwright-tests/`):

```
.github/workflows/playwright.yml
```

Paste the following:

```yaml
name: Playwright Tests

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: lts/*

      - name: Install dependencies
        working-directory: playwright-tests
        run: npm ci

      - name: Install Playwright Browsers
        working-directory: playwright-tests
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        working-directory: playwright-tests
        run: npx playwright test --project=chromium

      - name: Upload Playwright Report
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-tests/playwright-report/
          retention-days: 30

      - name: Upload Test Results (traces/videos)
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: test-results
          path: playwright-tests/test-results/
          retention-days: 30
```

✅ **What this does:**
- ✅ Installs Node + dependencies  
- ✅ Installs Playwright browsers + OS dependencies  
- ✅ Runs tests on **Chromium** in CI  
- ✅ Uploads **HTML report + traces/videos/screenshots** even if tests fail  

---

## ✅ Recommended `playwright.config.js` Settings for CI

Make sure your config is optimized for reliability:

```javascript
module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : 2,
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],
  use: {
    baseURL: 'https://practicetestautomation.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    navigationTimeout: 30000,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'on-first-retry',
  },
  timeout: 30000,
  expect: { timeout: 5000 },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
```

---

## ✅ Viewing CI Artifacts

1. After a workflow run completes → go to **Actions** tab in GitHub  
2. Click the failed/passed run  
3. Scroll down to **Artifacts** → download `playwright-report` or `test-results`  
4. Open `index.html` locally, or use **`npx playwright show-trace`** on the downloaded `trace.zip`

---

## ✅ Best Practices for CI Stability

- ✅ **Keep tests independent** (no shared state between tests)  
- ✅ Use **`data-testid`** for stable locators in your app  
- ✅ Prefer **`getByRole()` / `getByLabel()`** over brittle CSS/XPath  
- ✅ Use **API calls** to create test data before UI tests (faster + more reliable)  
- ✅ Add **`waitForURL()` / `waitForResponse()`** instead of arbitrary `waitForTimeout()`  
- ✅ Run **only Chromium in CI** first (fast feedback), expand to Firefox/WebKit later  

---

## ✅ Troubleshooting CI Failures

| Symptom | Fix |
|--------|-----|
| Browsers fail to install in CI | Use `npx playwright install --with-deps` (already included above) |
| Tests pass locally but fail in CI | Check **timezone, locale, network, rate limits, CAPTCHA**; add retries + traces |
| HTML report not generated | Ensure `working-directory: playwright-tests` is set correctly in steps |
| Artifacts too large | Keep `retention-days` reasonable; avoid `video: 'on'` unless needed |

---

🎯 **Summary:** With **Module 9 (Debugging)** + **Module 10 (CI/CD)**, your course now takes learners from *local scripting → professional test automation → production CI pipelines* 🚀


---

## 🚀 Keep Going

Apply what you learned in this module:

- 🧪 **[Practice Exercises](./practice)** — hands-on tasks to build real skills
- 🏗️ **[Real Projects](./real-projects)** — real-world automation examples

