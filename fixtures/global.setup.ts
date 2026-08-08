import { chromium } from '@playwright/test';
import envConfig from '../config-loader';

const email = process.env.KOMUCH_TEST_EMAIL;
const password = process.env.KOMUCH_TEST_PASSWORD;

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(`${envConfig.baseURL}/login`);

  await page.getByPlaceholder('Email').fill(email!);
  await page.getByPlaceholder('Hasło').fill(password!);
  await page.getByRole('button', { name: 'Zaloguj' }).click();

  await page.waitForURL('**/');

  await page.context().storageState({
    path: 'storageState.json',
    indexedDB: true,
  });
}

export default globalSetup;
