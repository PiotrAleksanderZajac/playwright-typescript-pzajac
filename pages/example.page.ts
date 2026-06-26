import { Page } from '@playwright/test';

export class ExamplePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  title() {
    return this.page.locator('h1');
  }
}