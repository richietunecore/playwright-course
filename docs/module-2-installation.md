---
id: module-2-installation
title: Module 2 - Installing Playwright
sidebar_position: 3
---

# 📦 Module 2 – Installing Playwright

In this module, we set up a real Playwright project.

---

## ✅ Step 1: Create a Project Folder

```bash
mkdir playwright-tests
cd playwright-tests
```

---

## ✅ Step 2: Initialize Node Project

```bash
npm init -y
```

This creates a `package.json` file.

---

## ✅ Step 3: Install Playwright

```bash
npm init playwright@latest
```

### Choose:

- JavaScript
- Default test folder
- Install browsers → Yes
- GitHub Actions → No

---

## ✅ What Was Installed?

Playwright installed:

```
playwright.config.js
tests/
package.json
node_modules/
```

---

## ✅ Run Tests

```bash
npx playwright test
```

---

## ✅ View HTML Report

```bash
npx playwright show-report
```

---

## ✅ What Just Happened?

Playwright:

1. Launched a browser
2. Opened a sample website
3. Performed actions
4. Validated results
5. Generated a report

---

🎯 You now have a fully working automation framework.