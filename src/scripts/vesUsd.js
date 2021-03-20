const puppeteer = require('puppeteer');

const vesUsd = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://www.bcv.org.ve/');

    await page.waitForSelector('#dolar');

    const rate = await page.evaluate(() => {
      const res = document.querySelector('#dolar strong').innerText;
      const vesUsd = res.replace('.', '').replace('.', '').replace(',', '.');

      return vesUsd;
    });

    await await browser.close();

    console.log(rate);

    return { name: 'vesUsd', value: rate };
  } catch (e) {
    throw e;
  }
};

module.exports = vesUsd;
