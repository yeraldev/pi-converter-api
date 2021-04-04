const puppeteer = require('puppeteer');

const ves = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);

  await page.goto('http://www.bcv.org.ve/');

  const value = await page.evaluate(() => {
    const res = document.querySelector('#dolar strong').innerText;
    const ves = res.replace('.', '').replace('.', '').replace(',', '.');
    console.log(ves);

    return ves;
  });

  await await browser.close();

  return new Promise((resolve) =>
    resolve({ name: 'Bolívar venezolano', pair: 'USD', value: value })
  );
};

module.exports = ves;
