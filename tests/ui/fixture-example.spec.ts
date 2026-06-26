import { test, expect } from '../../fixtures/test-fixtures';

test('fixture example', async ({ authPage }) => {
  await authPage.goto('/');
  await expect(authPage).toHaveTitle(/JSONPlaceholder/);
});
