const piBtc = require('./../scripts/piBtc');
const btcUsd = require('./../scripts/btcUsd');
const vesUsd = require('./../scripts/vesUsd');

const ratesCtrl = {};

ratesCtrl.getRates = async (req, res) => {
  try {
    const rates = [await piBtc(), await btcUsd(), await vesUsd()];
    res.json({ rates });
  } catch (e) {
    throw e;
  }
};

module.exports = ratesCtrl;
