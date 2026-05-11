---
id: module-4-locators
title: Module 4 - Locators & Selectors
sidebar_position: 5
---




# 🎯 Module 4 – Locators & Selectors

Locators are the most important concept in Playwright.

They help you **find elements** on a webpage so you can interact with them.

---

## ✅ Types of Locators

Playwright gives us multiple ways to find elements:

| Locator | Example |
|---------|---------|
| `getByRole()` | Best practice |
| `getByText()` | Find by visible text |
| `getByLabel()` | Find by form label |
| `getByPlaceholder()` | Find by placeholder |
| `getByTestId()` | Find by data-testid |
| `locator()` | CSS / XPath fallback |

---

## ✅ 1. getByRole()

The **most recommended** locator in Playwright.

```javascript
// Click a button
await page.getByRole('button', { name: 'Submit' }).click();

// Find a textbox
await page.getByRole('textbox', { name: 'Email' }).fill('test@test.com');

// Find a heading
await page.getByRole('heading', { name: 'Welcome' });

// Find a link
await page.getByRole('link', { name: 'Home' }).click();
```

### Common Roles:
- `button`
- `textbox`
- `heading`
- `link`
- `checkbox`
- `radio`
- `listitem`
- `dialog`

---

## ✅ 2. getByText()

Find elements by their visible text.

```javascript
// Click element with exact text
await page.getByText('Sign In').click();

// Case insensitive match
await page.getByText(/sign in/i).click();
```

---

## ✅ 3. getByLabel()

Best for form inputs.

```javascript
await page.getByLabel('Email').fill('user@test.com');
await page.getByLabel('Password').fill('password123');
```

---

## ✅ 4. getByPlaceholder()

Find inputs by placeholder text.

```javascript
await page.getByPlaceholder('Enter your email').fill('user@test.com');
```

---

## ✅ 5. getByTestId()

Best for stable automation — requires `data-testid` in HTML.

```javascript
await page.getByTestId('login-button').click();
```

HTML looks like:

```html
<button data-testid="login-button">Login</button>
```

---

## ✅ 6. locator() – CSS Selector

Use when other locators don't work.

```javascript
// By CSS class
await page.locator('.submit-btn').click();

// By name attribute
await page.locator('textarea[name="q"]').fill('Playwright');

// By ID
await page.locator('#email').fill('user@test.com');
```

---

## ✅ 7. locator() – XPath

Use as last resort only.

```javascript
await


---

## 🚀 Keep Going

Apply what you learned in this module:

- 🧪 **[Practice Exercises](./practice)** — hands-on tasks to build real skills
- 🏗️ **[Real Projects](./real-projects)** — real-world automation examples

