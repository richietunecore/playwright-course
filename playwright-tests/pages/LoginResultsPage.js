const { BasePage } = require('./BasePage');
const { expect } = require('@playwright/test');

class LoginResultsPage extends BasePage {
  constructor(page) {
    super(page);

    // Locators
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