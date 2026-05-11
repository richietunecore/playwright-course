const { test, expect } = require('@playwright/test');

test('Google search should display results', async ({ page }) => {

  // Navigate to Google
  await page.goto('https://www.google.com');

  // Handle cookies popup if visible
  try {
    const acceptButton = page.getByRole('button', { name: /accept all/i });
    if (await acceptButton.isVisible({ timeout: 3000 })) {
      await acceptButton.click();
    }
  } catch (e) {
    // No cookie popup, continue
  }

  // Use name attribute selector - more stable for Google
  const searchInput = page.locator('textarea[name="q"]');
  await searchInput.waitFor({ state: 'visible', timeout: 10000 });
  await searchInput.fill('Playwright automation');
  await searchInput.press('Enter');

  // Wait for results page to load
  await page.waitForLoadState('domcontentloaded');

  // Assert search results page loaded
  await expect(page).toHaveTitle(/Playwright/);
});