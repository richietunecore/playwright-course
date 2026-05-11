---
id: module-9-reports-debugging
title: Module 9 - Reports & Debugging
sidebar_position: 9
---

# 🧩 Module 9 – Reports & Debugging

Playwright is built for **fast debugging**. From rich HTML reports to trace viewer, screenshots, videos, and the Playwright Inspector — you have everything you need to diagnose failures quickly.

---

## ✅ 1) Generate & View HTML Report

After running tests, Playwright generates an **HTML report**.

```bash
# Run tests (with traces enabled for best debugging)
npx playwright test --project=chromium --trace=on

# Open the HTML report
npx playwright show-report
```

✅ The HTML report shows:
- ✅ Passed / failed / flaky tests  
- ✅ Duration per test  
- ✅ Direct links to **traces, screenshots, videos**  

---

## ✅ 2) Trace Viewer (Most Powerful Debugging Tool)

**Traces capture everything:** DOM snapshots, network requests, console logs, actions, and more.

- **From HTML report:** Click any test → click **Trace**  
- **From CLI:** Open a specific trace file:
  ```bash
  npx playwright show-trace test-results/<test-folder>/trace.zip
  ```

🎯 In Trace Viewer you can:
- ⏪ **Step through each action** (click/fill/navigation)  
- 🔍 Inspect **DOM snapshots** at each step  
- 🌐 Review **network requests/responses**  
- 🧾 Check **console logs**  

---

## ✅ 3) Screenshots, Videos & Error Context

Configured in `playwright.config.js`:

```javascript
use: {
  screenshot: 'only-on-failure',
  trace: 'on-first-retry',
  video: 'on-first-retry',
}
```

📸 **Screenshots:** Saved on failures  
🎥 **Videos:** Recorded on first retry (great for flaky tests)  
🧾 **Error Context:** Playwright writes `error-context.md` files with extra info

---

## ✅ 4) Debug Mode (`--debug`)

Step through a test line-by-line with the **Playwright Inspector**:

```bash
npx playwright test tests/login.spec.js --project=chromium --debug
```

- 🧭 Use the **step button** to execute one action at a time  
- 🔎 Inspect locators live in the browser  
- ✍️ Edit the test on the fly and rerun  

---

## ✅ 5) `PWDEBUG=1` (Terminal Debugging)

An alternative debug mode that prints detailed logs in the terminal:

```bash
PWDEBUG=1 npx playwright test tests/login.spec.js --project=chromium
```

Useful when the Inspector UI doesn't attach (permissions, headless quirks, CI).

---

## ✅ 6) Common Debugging Scenarios & Fixes

| Problem | Likely Cause | Fix |
|--------|--------------|-----|
| Test times out on `click()` / `fill()` | Locator too strict / element not ready | Use `getByRole()` / `getByLabel()`, add `waitFor()` / `waitForLoadState()` |
| `toBeVisible()` fails | Element is in DOM but hidden / off-screen | Use `scrollIntoViewIfNeeded()` or verify visibility condition |
| Flaky test (intermittent) | Race condition / animations / network | Add `waitForURL()`, `waitForResponse()`, increase timeouts carefully |
| `--debug` shows "about:blank" | Browser/DevTools connection issue | `npx playwright install chromium`, close all browser windows, try `PWDEBUG=1` |
| Port conflict for report (`EADDRINUSE`) | Another process using report port | `lsof -i :9323` → `kill -9 <PID>` (macOS/Linux) or `netstat` / `taskkill` (Windows) |

---

## ✅ 7) Best Practices for Debugging

- ✅ **Always enable trace on failure:** `trace: 'on-first-retry'`  
- ✅ **Run locally with `--headed` first:** `npx playwright test --headed`  
- ✅ **Use `data-testid` in your app** for the most stable locators  
- ✅ **Keep tests small & focused:** One behavior per test = easier to isolate failures  
- ✅ **Write meaningful test names:** `test('Login fails with invalid password')` is easier to debug than `test('test 3')`  

---

🎯 **Summary:** Playwright gives you a **complete debugging toolkit** — **HTML report + trace viewer + screenshots/videos + Inspector + logs** — so you can fix failures in minutes, not hours.