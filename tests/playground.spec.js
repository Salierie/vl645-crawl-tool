const cheerio = require("cheerio");
const axios = require("axios");
const {test} = require('@playwright/test');

const results = []; let num = ""; 

test ('AutoPage', async ({page})=>{
    await page.goto('https://vietlott.vn/vi/trung-thuong/ket-qua-trung-thuong/winning-number-645#top');

    for(let i = 0; i <= 2; i++){
        

        const btnCopy = page.locator("//a[normalize-space()='»']");

        await btnCopy.dblclick();

        await page.waitForTimeout(0);
    }
});