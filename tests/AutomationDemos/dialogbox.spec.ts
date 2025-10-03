import { test, expect } from '@playwright/test';

test('should handle javascript Alert', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe('alert');
    await dialog.accept();
  });
  await page.locator('button:has-text("Click Me")').nth(0).click();
  });


test('handle confirmation alert box', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Press a button!'); 
    await dialog.accept(); 
  });
  await page.locator('button:has-text("Click Me")').nth(1).click();
  await expect(page.locator('#confirm-demo')).toHaveText('You pressed OK!');
  const confirmMessage  = page.locator('//*[@id="__next"]/section[3]/div/div/div/div[2]/div'); 
  await confirmMessage .screenshot({
  path: 'C:\\Projects\\TestDemos\\Testdemo\\tests\\Screenshots\\DialogConfirmbox.png'
  });
});


test('should handle prompt box and validate message', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe('prompt');
    await dialog.accept("'Afzal'");
  });
  await page.locator('button:has-text("Click Me")').nth(2).click();
  await expect(page.locator('#prompt-demo')).toContainText("'Afzal'");
  const PromoptMessage  = page.locator('//*[@id="__next"]/section[3]/div/div/div/div[3]'); 
  await PromoptMessage.screenshot({
  path: 'C:\\Projects\\TestDemos\\Testdemo\\tests\\Screenshots\\DialogPromptbox.png'
  });
});
