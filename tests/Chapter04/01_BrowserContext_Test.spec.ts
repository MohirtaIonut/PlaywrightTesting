import { test, expect } from '@playwright/test';

test('Capture screenshots in playwright', async ({ page, browser }) => {
    await page.goto('https://www.youtube.com/@testerstalk');
    await page.getByRole('button', { name: 'Accept all' }).click();

    //2 browser sessios
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page2.goto('https://www.youtube.com/@testerstalk');
    await page2.getByRole('button', { name: 'Accept all' }).click();


    //create new tab
    const newTab = await context2.newPage();
    await newTab.goto('https://www.youtube.com/@testerstalk');
    //await newTab.getByRole('button', { name: 'Accept all' }).click();

});