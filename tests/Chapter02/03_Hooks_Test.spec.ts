import { test, expect } from '@playwright/test';

test.beforeAll(async ({ page }) => {
    console.log('Running before all tests...');
    //await page.goto('https://www.youtube.com/');
    //await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
})

test.afterEach(async ({ page }) => {
    console.log('Running before all tests...');
    await page.close();
})

//test.afterAll(async() =>{
// console.log('Running after all tests...');
//})

test('Test 1', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click();
    await expect(page.locator('#secondary-inner')).toContainText('Playwright by Testers Talk☑️');


});


test('Test 2', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click();
    await expect(page.locator('#secondary-inner')).toContainText('Playwright by Testers Talk☑️');


})
