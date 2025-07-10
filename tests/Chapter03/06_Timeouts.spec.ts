import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
 

  await page.goto('https://www.google.com/');

  await page.getByRole('button', { name: 'Acceptă tot' }).click();

  await page.getByTitle('Caută').fill('Salutare');

  await page.waitForTimeout(60000);

});