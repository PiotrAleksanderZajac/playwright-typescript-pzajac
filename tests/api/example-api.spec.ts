import { test, expect } from '../../fixtures/test-fixtures';

test('GET /users', async ({ apiClient }) => {
  const response = await apiClient.get('/users');
  expect(response.ok()).toBeTruthy();
});
