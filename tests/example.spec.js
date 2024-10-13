// @ts-check
const { test, expect } = require('@playwright/test');

test('ScreenshotWeeklyMenu', async ({ page }) => {
  await page.goto("https://mealdoo.com/week/uniresta/julinia/ravintolajulinia?date=2024-10-07&lang=fi&openAll=true&theme=light--light-green")
  await page.getByRole('button', { name: 'Näytä kaikki päivät' }).click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot.png', fullPage: true });await expect(page.getByRole('button', { name: 'Näytä kaikki päivät' })).toBeVisible();
});
