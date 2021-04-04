const pi = require('../scripts/pi');
const btc = require('../scripts/btc');
const ves = require('../scripts/ves');

const currenciesCtrl = {};

currenciesCtrl.getPi = async (req, res, next) => {
  try {
    const _pi = await pi();
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
