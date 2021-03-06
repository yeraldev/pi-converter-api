const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT
// const morgan = require('morgan');

// Init
const app = express()

// Setting
app.set("port", PORT || 3000)

// Middlewares
app.use(cors())
app.use(express.json())
// app.use(morgan('dev'));

// Routes
app.use("/api/currencies", require("./routes/currencies.routes"))

// Handling Errors
app.use((err, req, res, next) => {
  console.log({ err })
  res.status(400).json(err.message)
})

module.exports = app
