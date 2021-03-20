const puppeteer = require('puppeteer');

const btcRate = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.google.com/search?q=btc+usd');

    await page.waitForSelector('.dDoNo');

    const rate = await page.evaluate(() => {
      const res = document.querySelector('.dDoNo span').innerText;
      const btcUsd = res.replace(',', '');

      return btcUsd;
    });

    await browser.close();

    return { name: 'btcUsd', value: rate };
  } catch (e) {
    throw e;
  }
};

module.exports = btcRate;
