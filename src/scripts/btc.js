const puppeteer = require('puppeteer');

const btc = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);

    await page.goto('https://es.investing.com/crypto/bitcoin/btc-usd');

    await page.waitForSelector('.main-current-data');

    const value = await page.evaluate(() => {
      const res = document.querySelector('#last_last').innerText;
      const btc = res.replace('.', '').replace(',', '.');

      return btc;
    });

    await browser.close();

    return new Promise((resolve) =>
      resolve({ name: 'Bitcoin', pair: 'USD', value: value })
    );
  } catch (e) {
    throw e;
  }
};

module.exports = btc;
