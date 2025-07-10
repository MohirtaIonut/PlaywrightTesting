import { test, expect } from '@playwright/test';

test.describe('Smoke testing', () => {
    test('Test 1', async ({ page }) => {
        await page.goto('https://www.youtube.com/');
        await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
        await page.locator('[title="Search"]').first().click();

        await expect.soft(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk')
        await expect.soft(page).toHaveTitle('playwright by testers talk - YouTube');

        //await expect.soft(page.locator('[class="smartimation__content"]')).toHaveText('Abonează-te');

    });

})

test.describe('Regression testing', async () => {
    test('Test 2', async ({ page }) => {
        await page.goto('https://www.youtube.com/');
        await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
        await page.locator('[title="Search"]').first().click();

        await expect.soft(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk')
        await expect.soft(page).toHaveTitle('playwright by testers talk - YouTube');

        //await expect.soft(page.locator('[class="smartimation__content"]')).toHaveText('Abonează-te');

    });
    test('Test 3', async ({ page }) => {
        await page.goto('https://www.youtube.com/');
        await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
        await page.locator('[title="Search"]').first().click();

        await expect.soft(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk')
        await expect.soft(page).toHaveTitle('playwright by testers talk - YouTube');

        //await expect.soft(page.locator('[class="smartimation__content"]')).toHaveText('Abonează-te');

    });

})


