const {test} = require('@playwright/test');

test ('AutoPage', async ({page})=>{
    await page.goto('https://vietlott.vn/vi/trung-thuong/ket-qua-trung-thuong/winning-number-645#top');

    const btnCopy = page.locator("//a[normalize-space()='»']");

    await btnCopy.dblclick();
    
})