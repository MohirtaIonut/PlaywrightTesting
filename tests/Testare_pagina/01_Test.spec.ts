import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // const fullText = await page.getByText('Username : Admin').innerText(); // sau textContent()
  
  // const adminValue = fullText.split(':')[1].trim();

  // console.log('Valoarea extrasă este:', adminValue); // Va afișa: Admin


  // const passText = await page.getByText('Password : admin123').innerText();
  // const password = passText.split(':')[1].trim();
  // console.log('Parola extrasă este:', password); // admin123

  // const usernameFild = await page.locator('[name="username"]');
  // await usernameFild.click();
  // await usernameFild.fill('Admin');

  // const passwordFild = await page.locator('[type="password"]');
  // await passwordFild.click();
  // await passwordFild.fill('admin123');

  // await page.getByRole('button', { name: 'Login' }).click();
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
const fullText = await page.getByText('Username : Admin').innerText(); // sau textContent()
  
  const adminValue = fullText.split(':')[1].trim();

  console.log('Valoarea extrasă este:', adminValue); // Va afișa: Admin


  const passText = await page.getByText('Password : admin123').innerText();
  const password = passText.split(':')[1].trim();
  console.log('Parola extrasă este:', password); // admin123

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(adminValue);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
});
