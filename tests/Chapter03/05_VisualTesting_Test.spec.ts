import { test, expect } from '@playwright/test'


test('Visual comparios in playwright', async ({ page }) => {

    await page.goto('https://github.com/login');
    await expect(page).toHaveScreenshot('GitHubLogInPage.png');
    await page.locator('[id="login_field"]').fill('ionut');

    await expect(page).toHaveScreenshot('GitHubLogInPage.png');



})
test('Element Visual comparios in playwright', async ({ page }) => {

    await page.goto('https://github.com/login');


    await expect(page).toHaveScreenshot('GitHubLogInPage.png');
    // await page.locator('[id="login_field"]').fill('ionut');
    const element = page.locator('[class="auth-form-body mt-3"]');
    // await expect(page).toHaveScreenshot('GitHubLogInPage.png');
    await expect(element).toHaveScreenshot('GitHubLogInForm.png');



})



