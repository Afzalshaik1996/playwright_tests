import test, { chromium, firefox, webkit, Browser, Page, expect } from '@playwright/test';
import path from 'path';

test('Browser & Page Actions', async({page })=>{
await page.goto('https://www.lambdatest.com/selenium-playground'); // open URL
await page.reload();                     // reload page
await page.close();                      // close page
});

test('Element Interaction', async({page})=>{
await page.goto('https://www.lambdatest.com/selenium-playground/hover-demo');
await page.getByRole('button', { name: 'Book a Demo' }).click();
await page.click('//span[@class="cursor-pointer close text-gray-240 xxl:text-size-30 xl:text-size-25 text-size-20 font-normal"]')
await page.hover('//*[@id="__next"]/section[3]/div/div/div/div/div/div/div/div[1]/div[1]')
await page.goto('https://testautomationpractice.blogspot.com/');
await page.dblclick('//button[@ondblclick="myFunction1()"]')
await page.waitForTimeout(3000);
});

test('Element Interaction2', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
await page.fill('//*[@id="name"]', 'Afzal');
await page.type('//*[@id="email"]', 'admin', { delay: 500 });

//dropdowns
const dropdownOptions = page.locator('#country');
await dropdownOptions.scrollIntoViewIfNeeded();
await page.selectOption('#country', 'India')
await page.selectOption('#colors', { label: 'White' });
await page.selectOption('#animals', { index: 7 });

//checkboxes
await page.check('#male');
const checkboxes = page.locator('//input[@type="checkbox"]') 
await checkboxes.nth(1).check()
await checkboxes.nth(1).uncheck()

//drag and drop
await page.goto('https://www.lambdatest.com/selenium-playground/drag-and-drop-demo')
await page.dragAndDrop('//*[@id="todrag"]/span[1]', '#mydropzone');
await page.dragAndDrop('//*[@id="todrag"]/span', '#mydropzone');
const droppedItem1 = page.locator('#droppedlist');
await expect(droppedItem1).toContainText('Draggable 1Draggable 2');
await page.dragAndDrop('#draggable', '#droppable');
const droppedItem2 = page.locator('#droppable');
await expect(droppedItem2).toContainText('Dropped!');

//keyboard
await page.goto('https://testautomationpractice.blogspot.com/');
await page.locator('#textarea').focus();
await page.keyboard.press('Enter');
await page.keyboard.type('Hello World');
await page.keyboard.press('Control+A');
await page.keyboard.press('Control+C');
await page.locator('//*[@id="email"]').focus();
await page.keyboard.press('Enter');
await page.keyboard.press('Control+V');
});

test('Screenshots and Videos', async({browser})=>{
const context = await browser.newContext({
recordVideo: { dir: 'C:\\Users\\AfzalA\\VSCodeProjects\\TestDemos\\Testdemo\\tests\\Videos' }}) // directory to save videos
const page = await context.newPage();
await page.goto('https://www.lambdatest.com/selenium-playground/');
await page.screenshot({path: 'C:\\Users\\AfzalA\\VSCodeProjects\\TestDemos\\Testdemo\\tests\\Screenshots\\screenshot.png', fullPage: false });
const video = page.video();
await page.close();
const videoPath = await page.video()?.path();
console.log('Video saved at:', videoPath);
await context.close();
});

test('Frames test', async({page})=>{
await page.goto('https://www.lambdatest.com/selenium-playground/iframe-demo/');
const frame1 = page.frameLocator('#iFrame1')
await frame1.locator('//div[@class="rsw-ce"]').fill('Afzal')
const frame2 = page.frameLocator('#iFrame2')
await frame2.locator('//a[@href="/support/docs/playwright-testing/"]').click()
const headerLocator = frame2.locator('h1').first() 
await headerLocator.waitFor({ state: 'visible', timeout: 10000 });
await expect (headerLocator).toHaveText('Getting Started With Playwright Testing')
});

test('File Download and Upload', async({page, browser})=>{
await page.goto('https://www.lambdatest.com/selenium-playground/download-file-demo');
const [ download ] = await Promise.all([
  page.waitForEvent('download'),
  page.click('//button[@class="btn btn-primary"]')])
  const filePath = path.join(
    'C:\\Users\\AfzalA\\Downloads',
    download.suggestedFilename()
  );
await download.saveAs(filePath);
await page.goto('https://www.lambdatest.com/selenium-playground/upload-file-demo');
await page.setInputFiles('#file', 'C:\\Users\\AfzalA\\Downloads\\LambdaTest.pdf');
await expect(page.locator('#error')).toHaveText('File Successfully Uploaded')
await page.waitForTimeout(3000);
await browser.close();
});

test('Multiple tabs', async({page,context})=>{
  await page.goto('https://testautomationpractice.blogspot.com/');
   const [newPage] = await Promise.all([
    context.waitForEvent('page'), 
    page.locator('//button[@onclick ="myFunction()"]').click()
  ]);
  await newPage.waitForLoadState();
  expect(await newPage.title()).toContain('SDET-QA Blog');
  await page.bringToFront();

//New Window 
  await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
const [popup] = await Promise.all([
    context.waitForEvent('page', { timeout: 10000 }), 
    page.click("a[title='Follow @Lambdatesting on Twitter']")
  ]);
  await popup.waitForLoadState();
  expect(popup.url()).toContain('https://x.com/Lambdatesting');

   await page.goto('https://testautomationpractice.blogspot.com/');
const [popup2] = await Promise.all([
    context.waitForEvent('page', { timeout: 10000 }), 
    page.click("#PopUp")
  ]);
  await popup2.waitForLoadState();

  const [newPage2] = await Promise.all([
    context.waitForEvent('page', { timeout: 10000 }),
popup2.locator('a:has-text("Submit your talk")').click() 
 ]);
  await newPage2.waitForLoadState();

const headerLocator = newPage2.locator('h1').first()
await headerLocator.waitFor({ state: 'visible', timeout: 10000 });
await expect (headerLocator).toBeVisible()
});

