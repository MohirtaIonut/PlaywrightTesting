import {test, expect} from '@playwright/test'

//test.afterEach ('Close the browser' , async({page}) =>{
   // await page.close();
//})

test('Handling IFrames Drag and Drop element in Playwright' , async({page}) =>{

    await page.goto('https://jqueryui.com/droppable/');


await page.locator('[class="menu-item"]').first().click({button : 'middle'});
await page.locator('[class="menu-item"]').first().hover();

})