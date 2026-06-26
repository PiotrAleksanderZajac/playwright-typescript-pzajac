import { chromium } from '@playwright/test';

async function globalSetup() {

  console.log("GLOBAL SETUP START");

  // ADMIN LOGIN
  {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.waitForURL('**/inventory.html');

    await page.context().storageState({ path: 'storageState.admin.json' });
    await browser.close();
  }

  // USER LOGIN
  {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'problem_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.waitForURL('**/inventory.html');

    await page.context().storageState({ path: 'storageState.user.json' });
    await browser.close();
  }
}

export default globalSetup;
