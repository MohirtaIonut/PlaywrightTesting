import { test, expect } from '@playwright/test';

test('Assertions in playwright', async ({ page }) => {
    // await page.goto('https://www.youtube.com/');
    // await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

    // //Visivle or not , editable or not , enabled or not, empty or not
    // await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
    // await expect(page.getByRole('combobox', { name: 'Search' })).toBeEditable();
    // await expect(page.getByRole('combobox', { name: 'Search' })).toBeEnabled();
    // await expect(page.getByRole('combobox', { name: 'Search' })).toBeEmpty();

    //Verify URL, page title, text, count


await page.goto('https://www.youtube.com/');
    await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    //await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.locator('[title="Search"]').first().click();

    await expect (page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk')
    await expect (page).toHaveTitle('playwright by testers talk - YouTube');

    await expect(page.locator('[class="smartimation__content"]')).toHaveText('Abonează-te');

    

    







});