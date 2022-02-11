const pi = require("../scripts/pi")
const btc = require("../scripts/btc")
const ves = require("../scripts/ves")
const pel = { name: "Peso libre", pair: "USD", value: 1 }
const usd = { name: "Dólar estadounidense", pair: "PEL", value: 1 }

const currenciesCtrl = {
  getCurrencies: async (req, res, next) => {
    try {
      const currencies = await Promise.all([pi(), btc(), ves(), usd, pel])

      console.log({ currencies })

      res.status(200).json(currencies)
    } catch (e) {
      next(e)
    }
  },
}

module.exports = currenciesCtrl
