const puppeteer = require('puppeteer');

const vesUsd = (async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://www.bcv.org.ve/');

  await page.waitForSelector('#dolar');

  const rate = await page.evaluate(() => {
    const vesUsd = document.querySelector('#dolar strong').innerText;

    return vesUsd;
  });

  await await browser.close();

  return { rate };
})();

module.export = vesUsd;
