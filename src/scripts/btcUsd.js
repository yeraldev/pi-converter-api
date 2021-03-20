const puppeteer = require('puppeteer');

const btcRate = (async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.google.com/search?q=btc+usd');

  await page.waitForSelector('.dDoNo');

  const rate = await page.evaluate(() => {
    const btcUsd = document.querySelector('.dDoNo span').innerText;

    return btcUsd;
  });
  console.log(rate);

  await await browser.close();

  return rate;
})();

module.export = btcRate;
