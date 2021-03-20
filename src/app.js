import express from 'express';
import config from './config';
import cors from 'cors';
import morgan from 'morgan';

// Init
const app = express();

// Setting
app.set('port', config.PORT || 3000);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
// app.use('api/', require());

export default app;
