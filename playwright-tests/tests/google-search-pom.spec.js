const { test, expect } = require('@playwright/test');
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