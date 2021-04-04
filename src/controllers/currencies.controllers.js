const pi = require('../scripts/pi');
const btc = require('../scripts/btc');
const ves = require('../scripts/ves');

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

currenciesCtrl.getPi = async (req, res, next) => {
  try {
    const _pi = await pi();
    console.log(_pi);
    res.status(200).json(_pi);
  } catch (e) {
    next(e);
  }
};

currenciesCtrl.getBtc = async (req, res, next) => {
  try {
    const _btc = await btc();
    res.status(200).json(_btc);
  } catch (e) {
    next(e);
  }
};

currenciesCtrl.getVes = async (req, res, next) => {
  try {
    const _ves = await ves();
    res.status(200).json(_ves);
  } catch (e) {
    next(e);
  }
};

module.exports = currenciesCtrl;
