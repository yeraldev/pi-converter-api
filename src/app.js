import express from 'express';
import config from './config';
import cors from 'cors';
// import morgan from 'morgan';
import ratesRoutes from './routes/rates.routes';

// Init
const app = express();

// Setting
app.set('port', config.PORT || 3000);

// Middlewares
app.use(cors());

// Routes
app.use('/api/rates', ratesRoutes);

export default app;
