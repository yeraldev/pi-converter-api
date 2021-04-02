const puppeteer = require('puppeteer');

const ves = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);

    await page.goto('https://es.investing.com/currencies/usd-vef');

    await page.waitForSelector('.main-current-data');

    const value = await page.evaluate(() => {
      const res = document.querySelector('#last_last').innerText;
      const ves = res.replace('.', '').replace('.', '').replace(',', '.');

      return ves;
    });

    await await browser.close();

    return new Promise((resolve) =>
      resolve({ name: 'Bolívar venezolano', pair: 'USD', value: value })
    );
  } catch (e) {
    throw e;
  }
};

module.exports = ves;
