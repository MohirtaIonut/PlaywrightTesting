import { test, expect } from '@playwright/test'


test('Handling Alert PopUps', async ({ page }) => {

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    //e mandatory sa adaugam asta ca sa se deschida pop up
    page.once('dialog', dialog => {
        dialog.accept();
        // dialog.dismiss();
        console.log(`Alert type is : ${dialog.type()}`);
    });

    await page.getByText('See an example alert', { exact: true }).click();

})

test('Handling popups', async ({ page }) => {

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    //e mandatory sa adaugam asta ca sa se deschida pop up
    page.once('dialog', dialog => {
        dialog.accept();
        // dialog.dismiss();
        console.log(`PopUp type is : ${dialog.type()}`);
    });

    await page.getByText('See a sample confirm', { exact: true }).click();


})

test('Handling prompt popups', async ({ page }) => {

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    //e mandatory sa adaugam asta ca sa se deschida pop up
    page.once('dialog', async (dialog) => {

        await dialog.accept('test');
        console.log(`PopUp type is : ${dialog.type()}`);

    });

    await page.getByText('See a sample prompt', { exact: true }).click();
})

