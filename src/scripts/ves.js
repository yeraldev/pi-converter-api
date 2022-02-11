const puppeteer = require("puppeteer")
const cheerio = require("cheerio")
const axios = require("axios")

const ves = async () => {
  try {
    const url = "http://www.bcv.org.ve/"

    const selector =
      "#dolar > div > div > div.col-sm-6.col-xs-6.centrado > strong"

    const { data } = await axios(url)

    const $ = cheerio.load(data)

    const vesValue = $(selector).text().trim()

    const value = parseFloat(vesValue.replace(",", ".")).toFixed(2)

    return { name: "Bolívar venezolano", pair: "USD", value: value }
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = ves
