import {test, expect} from '@playwright/test'

//test.afterEach ('Close the browser' , async({page}) =>{
   // await page.close();
//})

test('Handling IFrames Drag and Drop element in Playwright' , async({page}) =>{

    await page.goto('https://jqueryui.com/droppable/');


    //identify Iframe

    const iframe = page.frameLocator('[class="demo-frame"]');

    //drag element , drop element

    const dragElement = iframe.locator('[id="draggable"]');

    const dropElement = iframe.locator('[id="droppable"]');

await dragElement.dragTo(dropElement);

})