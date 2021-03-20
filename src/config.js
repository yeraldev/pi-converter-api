const { config } = require('dotenv');
config();

module.exports = {
  URI: process.env.DB_URI,
  PORT: process.env.PORT
};
