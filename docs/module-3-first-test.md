---
id: module-3-first-test
title: Module 3 - Writing Your First Test
sidebar_position: 4
---




# 🧪 Module 3 – Writing Your First Test

In this module, we created our first custom Playwright test.

---

## ✅ Test File Location

```
playwright-tests/tests/google-search.spec.js
```

---

## ✅ Complete Test Code

```javascript
const { test, expect } = require('@playwright/test');

test('Google search should display results', async ({ page }) => {
  await page.goto('https://www.google.com');

  const acceptButton = page.locator('text=Accept all');
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }

  await page.fill('textarea[name="q"]', 'Playwright automation');
  await page.keyboard.press('Enter');

  await expect(page).toHaveTitle(/Playwright/);
});
```

---

# ✅ Understanding the Code

---

## 1️⃣ test()

```javascript
test('Google search should display results', async ({ page }) => {
```

- `test()` defines a test case
- First parameter → Test name
- Second parameter → Async function
- `{ page }` → Playwright gives us a browser page automatically

---

## 2️⃣ page.goto()

```javascript
await page.goto('https://www.google.com');
```

This opens a webpage.

---

## 3️⃣ Locators

```javascript
const acceptButton = page.locator('text=Accept all');
```

Locators help us find elements on the page.

---

## 4️⃣ Performing Actions

```javascript
await page.fill('textarea[name="q"]', 'Playwright automation');
await page.keyboard.press('Enter');
```

We:
- Fill input field
- Press Enter key

---

## 5️⃣ Assertions

```javascript
await expect(page).toHaveTitle(/Playwright/);
```

Assertions verify expected results.

This checks if page title contains the word "Playwright".

---

# ✅ Key Concepts Learned

- ✅ test()
- ✅ page object
- ✅ locators
- ✅ actions
- ✅ assertions
- ✅ async / await

---

🎯 You have now written your first automation test.


---

## 🚀 Keep Going

Apply what you learned in this module:

- 🧪 **[Practice Exercises](./practice)** — hands-on tasks to build real skills
- 🏗️ **[Real Projects](./real-projects)** — real-world automation examples

