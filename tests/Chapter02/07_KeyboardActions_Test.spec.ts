import{test , expect} from '@playwright/test'

test('Use keyboard actions' , async({page}) =>{
await page.goto('https://www.google.com/');

  await page.getByRole('button', { name: 'Acceptă tot' }).click();

  await page.getByTitle('Caută').click();
  await page.getByTitle('Caută').fill('Playwright by testers talk');
//await page.getByTitle('Caută').press('Enter');


//Selecting and deleting from keyboard
await page.keyboard.press('Control+A');
await page.keyboard.press('Delete');





})

