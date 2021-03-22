const puppeteer = require('puppeteer');

const btc = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.google.com/search?q=btc+usd');

    await page.waitForSelector('.dDoNo');

    const value = await page.evaluate(() => {
      const res = document.querySelector('.dDoNo span').innerText;
      const btc = res.replace(',', '');

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
