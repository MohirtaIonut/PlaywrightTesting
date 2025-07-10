import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
 // await page.goto('https://github.com/BakkappaN/');

  //GetByRole

  // await page.getByRole('link', { name: 'Sign in' }).click();

  //GetByLabel

  //await page.getByLabel('Homepage', { exact: true }).first().click();

  //GetByAltText

  //await page.getByAltText("View BakkappaN's full-sized avatar").click();


  //GetByTestId

  //await page.getByTestId("overview").first().click();

  //GetByText

  //
  //await page.getByText('Sign in').click();

  //GetByPlaceholder , Xpath and CSSSelectors

 // await page.goto('https://www.youtube.com/@testerstalk');
  //await page.getByRole('button' , {name: 'Accept All' }).click();

  //await page.getByPlaceholder('Search').fill('testers talk');

  //Xpath

 // await page.locator('//input[@name="search_query"]').fill('testers talk');

  //CSS

  //await page.locator('input[name="search_query"]').fill('testers talk');

  //GetByTitle

  await page.goto('https://www.google.com/');

  await page.getByRole('button', { name: 'Acceptă tot' }).click();

  await page.getByTitle('Caută').fill('Salutare');

});