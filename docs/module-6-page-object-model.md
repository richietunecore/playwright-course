---
id: module-6-page-object-model
title: Module 6 - Page Object Model
sidebar_position: 7
---




# 🏗️ Module 6 – Page Object Model (POM)

Page Object Model is the most widely used design pattern in test automation.

---

## ✅ What is POM?

Without POM:

```javascript
// Test file doing everything
test('Login test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.locator('#username').fill('student');
  await page.locator('#password').fill('Password123');
  await page.locator('#submit').click();
  await expect(page.locator('.post-title')).toHaveText('Logged In Successfully');
});
```

With POM:

```javascript
// Test file is clean and readable
test('Login test', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginResultsPage = new LoginResultsPage(page);

  await homePage.goto();
  await homePage.login('student', 'Password123');
  await loginResultsPage.verifyLoginSuccess();
});
```

---

## ✅ Why Use POM?

| Without POM | With POM |
|-------------|----------|
| Locators duplicated everywhere | Locators defined once |
| Hard to maintain | Easy to maintain |
| Tests hard to read | Tests read like plain English |
| One change = fix everywhere | One change = fix in one place |

---

## ✅ Project Structure

```
playwright-tests/
│
├── pages/
│   ├── BasePage.js
│   ├── HomePage.js
│   └── LoginResultsPage.js
│
├── tests/
│   └── google-search-pom.spec.js
│
└── playwright.config.js
```

---

## ✅ BasePage

BasePage contains **common methods** shared across all pages.

```javascript
class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }
}

module.exports = { BasePage };
```

### Key Concept:
- Every page object **extends** BasePage
- Common methods written **once**
- All pages **inherit** them automatically

---

## ✅ HomePage

Each page object represents **one page** of the application.

```javascript
const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    // Define locators here
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#submit');
  }

  async goto() {
    await this.navigate('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { HomePage };
```

### Key Concepts:
- `constructor` → defines locators
- `super(page)` → passes page to BasePage
- Methods represent **user actions**

---

## ✅ LoginResultsPage

```javascript
const { BasePage } = require('./BasePage');
const { expect } = require('@playwright/test');

class LoginResultsPage extends BasePage {
  constructor(page) {
    super(page);

    this.successMessage = page.locator('.post-title');
    this.errorMessage = page.locator('#error');
    this.logoutButton = page.getByRole('link', { name: 'Log out' });
  }

  async verifyLoginSuccess() {
    await expect(this.successMessage).toHaveText('Logged In Successfully');
  }

  async verifyLogoutButtonVisible() {
    await expect(this.logoutButton).toBeVisible();
  }

  async verifyLoginFailed() {
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = { LoginResultsPage };
```

---

## ✅ Test File Using POM

```javascript
const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginResultsPage } = require('../pages/LoginResultsPage');

test.describe('Login Page - POM', () => {

  test('Successful login with valid credentials', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginResultsPage = new LoginResultsPage(page);

    await homePage.goto();
    await homePage.login('student', 'Password123');

    await loginResultsPage.verifyLoginSuccess();
    await loginResultsPage.verifyLogoutButtonVisible();
  });

  test('Failed login with invalid credentials', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginResultsPage = new LoginResultsPage(page);

    await homePage.goto();
    await homePage.login('wronguser', 'wrongpassword');

    await loginResultsPage.verifyLoginFailed();
  });

});
```

---

## ✅ POM Best Practices

- ✅ One file per page
- ✅ Define all locators in constructor
- ✅ Methods should represent user actions
- ✅ Assertions can go in page objects or test files
- ✅ Always extend BasePage
- ✅ Keep test files clean and readable
- ✅ Never hardcode URLs in test files

---

## ✅ POM Flow Diagram

```
Test File
    │
    ├── HomePage
    │       ├── goto()
    │       └── login()
    │
    └── LoginResultsPage
            ├── verifyLoginSuccess()
            ├── verifyLogoutButtonVisible()
            └── verifyLoginFailed()
```

---

## 🎯 Summary

- ✅ POM separates test logic from page logic
- ✅ BasePage holds shared methods
- ✅ Each page has its own class
- ✅ Tests become clean and readable
- ✅ Easy to maintain when UI changes


---

## 🚀 Keep Going

Apply what you learned in this module:

- 🧪 **[Practice Exercises](./practice)** — hands-on tasks to build real skills
- 🏗️ **[Real Projects](./real-projects)** — real-world automation examples

