const fs = require('fs');
const {test} = require('@playwright/test');

const results = []; let num = ""; 

test ('AutoPage', async ({page})=>{
    await page.goto('https://vietlott.vn/vi/trung-thuong/ket-qua-trung-thuong/winning-number-645#top');

    const r = page.locator("//tbody/tr[1]/td[3]/div[1]/span[1]").textContent();
    console.log(r);


    const btnCopy = page.locator("//a[normalize-space()='»']");
    await btnCopy.dblclick();
    await page.waitForTimeout(0);

});