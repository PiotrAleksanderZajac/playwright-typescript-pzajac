import { ApiClient } from './api-client';
import { Page } from '@playwright/test';

declare global {
  namespace PlaywrightTest {
    interface Fixtures {
      authPage: Page;
      apiClient: ApiClient;
    }
  }
}

export {};
