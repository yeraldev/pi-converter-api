const express = require('express');
const config = require('./config');
const cors = require('cors');
// const morgan =require('morgan');

// Init
const app = express();

// Setting
app.set('port', config.PORT || 3000);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/rates', require('./routes/rates.routes'));

module.exports = app;
