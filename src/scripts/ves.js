const puppeteer = require('puppeteer');

const ves = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://www.bcv.org.ve/');

    await page.waitForSelector('#dolar');

    const value = await page.evaluate(() => {
      const res = document.querySelector('#dolar strong').innerText;
      const ves = res.replace('.', '').replace('.', '').replace(',', '.');

      return ves;
    });

    await await browser.close();

    return new Promise((resolve) =>
      resolve({ name: 'Bolívar', pair: 'USD', value: value })
    );
  } catch (e) {
    throw e;
  }
};

module.exports = ves;
