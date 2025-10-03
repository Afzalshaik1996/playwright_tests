import { test, expect } from '@playwright/test';

test('Login to OrangeHRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[placeholder="Username"]', 'Admin');
  await page.fill('input[placeholder="Password"]', 'admin123');
  await page.click('button[type="submit"]');

  await expect(page.locator('h6')).toHaveText('Dashboard');
await page.screenshot({
  path: 'C:\\Projects\\TestDemos\\Testdemo\\tests\\Screenshots\\Login-Homepage.png',
  fullPage: false
});
});




// npx playwright test login.spec.ts --headed
// npx playwright test login.spec.ts
