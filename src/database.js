// const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const URI = process.env.DB_URI;

try {
  (async () => {
    const db = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB connected to', db.connection.name);
  })();
} catch (e) {
  console.error(e.message);
}
