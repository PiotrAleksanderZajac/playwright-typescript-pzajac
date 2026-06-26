import { test, expect } from '../../fixtures/test-fixtures';
import { ExamplePage } from '../../pages/example.page';

test('Example POM test', async ({ page }) => {
  const example = new ExamplePage(page);

  await example.goto();
  await expect(example.title()).toContainText('Playwright');
});
