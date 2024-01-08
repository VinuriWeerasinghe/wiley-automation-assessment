import { test, expect } from '@playwright/test';

test.describe('Link navigation test', () => {
  test('should navigate to Researcher resources page when link is clicked', async ({ page }) => {
    // Open the application page
    await page.goto('https://onlinelibrary.wiley.com/');

    // Find the "Researcher" link by role
    await page.getByRole('link', { name: 'Researchers' }).click();
    
    // Wait for the navigation to complete
    await page.waitForNavigation();

    // Assert the final URL
    await expect(page.url()).toBe('https://onlinelibrary.wiley.com/researchers');
  });
});
