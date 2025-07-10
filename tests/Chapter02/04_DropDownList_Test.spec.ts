import {test, expect} from '@playwright/test'

//test.afterEach ('Close the browser' , async({page}) =>{
   // await page.close();
//})

test('DropDown list in Facebook' , async({page}) =>{

    await page.goto('https://www.facebook.com/');

    await page.getByRole('button' , {name: 'Allow all cookies'}).click();

    await page.getByRole('button' , {name: 'Create new account' }).click();

    //Select dropdown using value

   // await page.getByLabel('Month').selectOption('9')
    //await page.getByRole('button' , {name: 'Allow all cookies'}).click();

    //Select dropdown using visible text
//await page.getByLabel('Month').selectOption('Aug');
//await page.getByRole('button' , {name: 'Allow all cookies'}).click();

    //Validate all the dropdown options

    await expect(page.locator('#month > option')).toHaveText(['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec']);
await page.getByRole('button' , {name: 'Allow all cookies'}).click();
})