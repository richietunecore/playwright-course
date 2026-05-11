---
id: module-8-configuration
title: Module 8 - Test Configuration
sidebar_position: 9
---

# ⚙️ Module 8 – Test Configuration

The `playwright.config.js` file is the heart of your Playwright framework.

It controls:
- Which browsers to run
- Timeouts
- Retries
- Reports
- Screenshots & Videos
- Base URL
- Workers & Parallelism

---

## ✅ Complete Configuration File

```javascript
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
```

---

## ✅ Configuration Deep Dive

---

### 1️⃣ testDir

```javascript
testDir: './tests',
```

Tells Playwright where to look for test files.

---

### 2️⃣ fullyParallel

```javascript
fullyParallel: true,
```

Runs all tests in parallel across all files.

| Value | Behaviour |
|-------|-----------|
| `true` | All tests run in parallel |
| `false` | Tests run sequentially |

---

### 3️⃣ retries

```javascript
retries: process.env.CI ? 2 : 1,
```

Automatically retries failed tests.

| Environment | Retries |
|-------------|---------|
| CI | 2 retries |
| Local | 1 retry |

---

### 4️⃣ workers

```javascript
workers: process.env.CI ? 1 : 2,
```

Number of parallel workers.

| Environment | Workers |
|-------------|---------|
| CI | 1 (stable) |
| Local | 2 (faster) |

---

### 5️⃣ reporter

```javascript
reporter: [
  ['html', { open: 'never' }],
  ['list']
],
```

Multiple reporters at once:

| Reporter | Description |
|----------|-------------|
| `html` | Beautiful HTML report |
| `list` | Terminal output |
| `dot` | Minimal dots output |
| `json` | JSON output for CI |

---

### 6️⃣ baseURL

```javascript
baseURL: 'https://practicetestautomation.com',
```

Set once, use everywhere:

```javascript
// Instead of full URL
await page.goto('https://practicetestautomation.com/practice-test-login/');

// You can use relative path
await page.goto('/practice-test-login/');
```

---

### 7️⃣ headless

```javascript
headless: true,
```

| Value | Behaviour |
|-------|-----------|
| `true` | Browser runs in background |
| `false` | Browser window visible |

---

### 8️⃣ viewport

```javascript
viewport: { width: 1280, height: 720 },
```

Sets browser window size for all tests.

---

### 9️⃣ Timeouts

```javascript
// Per action timeout (click, fill, etc)
actionTimeout: 10000,

// Navigation timeout (page.goto)
navigationTimeout: 30000,

// Global test timeout
timeout: 30000,

// Assertion timeout
expect: {
  timeout: 5000,
},
```

| Timeout | Controls |
|---------|----------|
| `actionTimeout` | Each action like click, fill |
| `navigationTimeout` | Page navigation |
| `timeout` | Entire test duration |
| `expect.timeout` | Each assertion |

---

### 🔟 Screenshots, Traces & Videos

```javascript
screenshot: 'only-on-failure',
trace: 'on-first-retry',
video: 'on-first-retry',
```

| Option | Values |
|--------|--------|
| `screenshot` | `on`, `off`, `only-on-failure` |
| `trace` | `on`, `off`, `on-first-retry` |
| `video` | `on`, `off`, `on-first-retry` |

---

### 1️⃣1️⃣ projects

```javascript
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
```

Run same tests across multiple browsers simultaneously.

---

## ✅ Useful CLI Options

```bash
# Run specific browser
npx playwright test --project=chromium

# Run in headed mode
npx playwright test --headed

# Run specific file
npx playwright test tests/api-testing.spec.js

# Run specific test by name
npx playwright test -g "Login test"

# Run with retries
npx playwright test --retries=3

# Run with specific workers
npx playwright test --workers=4

# Debug mode
npx playwright test --debug
```

---

## 🎯 Summary

| Config Option | Purpose |
|---------------|---------|
| `testDir` | Where tests live |
| `fullyParallel` | Run tests in parallel |
| `retries` | Auto retry failed tests |
| `workers` | Parallel execution threads |
| `reporter` | How results are reported |
| `baseURL` | Base URL for all tests |
| `headless` | Show or hide browser |
| `timeout` | Test time limit |
| `projects` | Multi-browser setup |