import {test, expect, firefox,} from 'playwright/test'

test('select the dropdown value', async({page})=> {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
    await page.selectOption("#select-demo", {label: "Thursday"})
    const selectedText = await page.locator('#select-demo option:checked').innerText();
    const messageText = await page.locator('//p[@class="selected-value text-size-14"]').innerText();
    expect(messageText).toContain(selectedText);
    console.log("The text of both is : ", selectedText + messageText)
    await page.waitForTimeout(3000);
    await page.selectOption("#multi-select", [{label: "Texas"},{value: "Washington"}
])
await page.waitForTimeout(3000);
})


test('browser open',async({page})=>{
  const browser = await firefox.launch()
    await page.goto('https://www.lambdatest.com/')
})