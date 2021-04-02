const express = require('express');
const config = require('./config');
const cors = require('cors');
// const morgan = require('morgan');

// Init
const app = express();

// Setting
app.set('port', config.PORT || 3000);

// Middlewares
app.use(cors());
app.use(express.json());
// app.use(morgan('dev'));

// Routes
app.use('/api/currencies', require('./routes/currencies.routes'));

// Handling Errors
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).json({
    error: err.message
  });
});

module.exports = app;
