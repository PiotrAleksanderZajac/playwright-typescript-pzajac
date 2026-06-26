import { Page } from '@playwright/test';

export const authFixtures = {
  authPage: async ({ page }: { page: Page }, use: any) => {
    await use(page);
  }
};
