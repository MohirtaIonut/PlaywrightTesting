import { test, expect } from '@playwright/test'


test('Get text and Get attribute value in playwright', async ({ page }) => {

    await test.step('pasul1', async () => {
        await page.goto('https://jqueryui.com/checkboxradio/');
        const iframe = await page.locator('[class="demo-frame"]');

        await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();

        await iframe.locator('[for="radio-1"]').check();
        await expect(iframe.locator('[for="radio-1"]')).toBeChecked();

    })




})