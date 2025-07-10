import {test , expect} from '@playwright/test'

test('Tag Test1' , {tag :['@Smoke testing'] }, async({page}) =>{

    await page.goto('https://jqueryui.com/datepicker/');


    //Hardcoded Date
    const Iframe = page.frameLocator('[class="demo-frame"]');

   // await Iframe.locator('[id="datepicker"]').fill('4/27/1994');

    //Selecting dynamic date

    await Iframe.locator('[id="datepicker"]').click();
    //await Iframe.locator('.ui-datepicker-today').click();

    //Selecting the past date

    await Iframe.locator('[id="datepicker"]').click();
await Iframe.locator('.ui-datepicker-prev').click();
await Iframe.locator('text="15"').click();

//Future date the same as up but we will click next button
})

test('Tag Test2' , {tag :['@Smoke testing', '@Regression Testing']}, async({page}) =>{

    await page.goto('https://jqueryui.com/datepicker/');


    //Hardcoded Date
    const Iframe = page.frameLocator('[class="demo-frame"]');

   // await Iframe.locator('[id="datepicker"]').fill('4/27/1994');

    //Selecting dynamic date

    await Iframe.locator('[id="datepicker"]').click();
    //await Iframe.locator('.ui-datepicker-today').click();

    //Selecting the past date

    await Iframe.locator('[id="datepicker"]').click();
await Iframe.locator('.ui-datepicker-prev').click();
await Iframe.locator('text="15"').click();

//Future date the same as up but we will click next button
})
test('Tag Test3' , {tag :['@Regression Testing']}, async({page}) =>{

    await page.goto('https://jqueryui.com/datepicker/');


    //Hardcoded Date
    const Iframe = page.frameLocator('[class="demo-frame"]');

   // await Iframe.locator('[id="datepicker"]').fill('4/27/1994');

    //Selecting dynamic date

    await Iframe.locator('[id="datepicker"]').click();
    //await Iframe.locator('.ui-datepicker-today').click();

    //Selecting the past date

    await Iframe.locator('[id="datepicker"]').click();
await Iframe.locator('.ui-datepicker-prev').click();
await Iframe.locator('text="15"').click();

//Future date the same as up but we will click next button
})