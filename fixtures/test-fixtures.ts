import { test as base, Page, APIRequestContext } from '@playwright/test';
import { authFixtures } from './auth-fixture';
import { apiFixtures, ApiClient } from './api-client';

type MyFixtures = {
  authPage: Page;
  apiClient: ApiClient;
};

export const test = base.extend<MyFixtures>({
  ...authFixtures,
  ...apiFixtures
});

export const expect = test.expect;
