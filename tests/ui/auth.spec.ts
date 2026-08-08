import { test, expect } from '../../fixtures/test-fixtures';

test('authenticated user is logged in', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('komuch_test@example.com')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Wyloguj' })).toBeVisible();
});
