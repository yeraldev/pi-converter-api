import { config } from 'dotenv';
config();

export default {
  URI: process.env.DB_URI,
  PORT: process.env.PORT
};
