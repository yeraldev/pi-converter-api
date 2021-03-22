const pi = require('../scripts/pi');
const btc = require('../scripts/btc');
const ves = require('../scripts/ves');
const pel = { name: 'Peso libre', pair: 'USD', value: 1 };
const usd = { name: 'Dólar estadounidense', pair: 'PEL', value: 1 };
const currenciesCtrl = {};

currenciesCtrl.getCurrencies = async (req, res) => {
  try {
    const currencies = [await btc(), await ves(), usd, pel, await pi()];
    res.json({ currencies });
  } catch (e) {
    throw e;
  }
};

module.exports = currenciesCtrl;
