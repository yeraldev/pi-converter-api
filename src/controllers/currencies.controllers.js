const pi = require('../scripts/pi');
const btc = require('../scripts/btc');
const ves = require('../scripts/ves');
const pel = { name: 'Peso libre', pair: 'USD', value: 1 };
const usd = { name: 'Dólar estadounidense', pair: 'USD', value: 1 };

const currenciesCtrl = {};

currenciesCtrl.getCurrencies = async (req, res, next) => {
  try {
    const currencies = [await pi(), await btc(), await ves(), usd, pel];
    console.log(currencies);
    res.status(200).json(currencies);
  } catch (e) {
    next(e);
  }
};

module.exports = currenciesCtrl;
