const axios = require("axios")

const btc = async () => {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`

    const res = await axios(url)
    const value = res.data.bitcoin.usd

    return { name: "Bitcoin", pair: "USD", value: value }
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = btc
