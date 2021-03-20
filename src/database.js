import mongoose from 'mongoose';
import config from './config';

try {
  (async () => {
    const db = await mongoose.connect(config.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB connected to', db.connection.name);
  })();
} catch (e) {
  console.error(e.message);
}
