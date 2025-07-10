//Import playwright module
import { test, expect } from '@playwright/test';
//

//Write a test
test('My first Playwright Typecript Test', async ({ page }) => {
//
    //Go to URL
   // await page.goto(process.env.GOOGLE_URL); este string undefined si go to accepta doar string
    await page.goto(`${process.env.GOOGLE_URL}`); //asa este template string

    
await page.getByRole('button', { name: 'Acceptă tot' }).click();
    
    await page.getByRole('combobox', { name: 'Caută' }).fill('playwright by testers talk');
    //await page.getByRole('combobox', { name: 'Caută' }).press('Enter');
    //Click on the playlist

    //await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    //Validate Web page title

   // await page.getByRole('heading', { name: 'Playwright by Testers Talk☑️' }).locator('span').click();
    //await expect(page.getByRole('main')).toContainText('Playwright by Testers Talk☑️');

   // await expect(page).toHaveTitle('Playwright by Testers Talk☑️')


    // nu merge acest test pe google ca imi ia locatorii in engleza dar eu am in romana broswer si am si code captcha ca vede ca sunt robot
})
