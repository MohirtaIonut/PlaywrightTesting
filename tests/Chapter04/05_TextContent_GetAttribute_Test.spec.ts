import { test, expect } from '@playwright/test'


test('Get text and Get attribute value in playwright', async ({ page }) => {

    await page.goto('https://github.com/BakkappaN/');
    const name = await page.locator('[itemprop="name"]').textContent();

    const finalName = name?.trim();

    console.log(`name is: ${finalName}`);

    expect(finalName).toBe('Testers Talk');

    const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');

console.log(`attribute value is: ${attributeValue}`);


})