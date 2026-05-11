const { test, expect } = require('@playwright/test');

test.describe('Actions & Assertions Examples', () => {

  test('Verify page title and URL', async ({ page }) => {
    await page.goto('https://playwright.dev');

    // Assert title
    await expect(page).toHaveTitle(/Playwright/);

    // Assert URL
    await expect(page).toHaveURL(/playwright.dev/);
  });

  test('Click and navigate', async ({ page }) => {
    await page.goto('https://playwright.dev');

    // Click docs link
    await page.getByRole('link', { name: 'Docs' }).first().click();

    // Assert we navigated
    await expect(page).toHaveURL(/docs/);
  });

  test('Verify element is visible', async ({ page }) => {
    await page.goto('https://playwright.dev');

    // Assert element visible
    await expect(
      page.getByRole('heading', { name: /Playwright enables reliable/i })
    ).toBeVisible();
  });

  test('Verify element text', async ({ page }) => {
    await page.goto('https://playwright.dev');

    const heading = page.getByRole('heading', { level: 1 });

    // Assert text content
    await expect(heading).toContainText('Playwright');
  });

});