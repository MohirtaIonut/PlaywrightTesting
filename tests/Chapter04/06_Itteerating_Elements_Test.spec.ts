import { test, expect } from '@playwright/test'
import { lookup } from 'dns';


test('itterating matching elements in playwright', async ({ page }) => {

    await page.goto('https://github.com/BakkappaN/');

    const repositoryLinks = await page.$$('.repo');

    for (const repositoryLink of repositoryLinks) {
        const text = await repositoryLink.textContent();
        console.log(`text from first loop: ${text}`);
    }

    console.log('   ');

    for (let index = 0; index < repositoryLinks.length; index++) {
        const text = await repositoryLinks[index].textContent();
        console.log(`Text from second loop: ${text}`);
    }


    console.log('   ');

    const repositoryLinks2 = await page.locator('.repo');

    const count = await repositoryLinks2.count();

    for (let index = 0; index < count; index++) {
        const text = await repositoryLinks2.nth(index).textContent();
        console.log(`Text from third for loop: ${text}`);
    }


})