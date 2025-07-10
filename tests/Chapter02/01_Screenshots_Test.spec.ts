import { test, expect } from '@playwright/test';

test('Capture screenshots in playwright', async ({ page }) => {
await page.goto('https://www.youtube.com/@testerstalk');
await page.getByRole('button', { name: 'Accept all' }).click();

//Element screenshot
await page.locator('#page-header').screenshot({path : './Screenshots/ElementScreenshot.png'})

//Page screenshot

await page.screenshot({path : './Screenshots/PageScreenshot.png'})


//Full page screenshot

await page.screenshot({path : './Screenshots/FullPageScreenshot.png', fullPage: true});
  
});