import { test, expect } from '@playwright/test'

test('Test pe Amazon', async ({ page }) => {

    await test.step('Navigate to URL', async () => {
        await page.goto('https://www.amazon.com/');
    })
    await test.step('Log In', async () => {
        await page.getByRole('link', { name: 'Sign in', exact: true }).click();

        await page.getByRole('textbox', { name: 'Enter your mobile number or' }).fill('mohirta.ionut@gmail.com');
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('Juventusfocsani1~');
        await page.getByRole('button', { name: 'Sign in' }).click();

    })
    await test.step('Failed Log in chech box', async () => {
        await expect(page.getByRole('heading', { name: 'There was a problem' })).toBeVisible();
        await expect(page.locator('#auth-error-message-box')).toContainText('There was a problem');
    })

}) 