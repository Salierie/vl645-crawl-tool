const {test} = require('@playwright/test');


test ('AutoPage', async ({page})=>{
    await page.goto('https://vietlott.vn/vi/trung-thuong/ket-qua-trung-thuong/winning-number-645#top');

    for(let i = 0; i < 5; i++){
        const btnCopy = page.locator("//a[normalize-space()='»']");

        

        await btnCopy.dblclick();

        await page.waitForTimeout(1000);
    }
});
