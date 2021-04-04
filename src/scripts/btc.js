const puppeteer = require('puppeteer');

const btc = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);

  // await page.goto('https://es.investing.com/crypto/bitcoin/btc-usd');
  await page.goto('https://www.google.com/search?q=btc+usd');

  await page.waitForSelector('.dDoNo');

  const value = await page.evaluate(() => {
    // const res = document.querySelector('#last_last').innerText;
    const res = document.querySelector('.dDoNo span').innerText;
    const btc = res.replace('.', '').replace(',', '.');

    return btc;
  });

  await browser.close();

  return new Promise((resolve) =>
    resolve({ name: 'Bitcoin', pair: 'USD', value: value })
  );
};

module.exports = btc;
