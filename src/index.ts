import express, { Express } from 'express';
import cors from 'cors';
import 'dotenv/config';
import authenticate from './routes/auth.route';
import controller from './controllers/error.controller';
import AppDataSource from './data-source';

import 'dotenv/config';
import 'reflect-metadata';
import logger from './logger';

async function initializeApp() {}

AppDataSource.initialize()
  .then(() => {
    const app: Express = express();
    const port = process.env.PORT || 3000;

    // Configure CORS to allow requests from certain domains
    const corsOptions = {
      origin: 'http://localhost:3001', // allowed domains
      methods: ['GET', 'POST'], // allowed methods
      credentials: true // allows cookies (if necessary)
    };

    app.use(cors(corsOptions));

    app.use(express.json());

    app.use(authenticate);

    app.use(controller.globalErrorHandler);

    app.listen(port, () => {
      logger.info(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) =>
    logger.error(`[server]: Could not initialize connection to the Database: ${error}`)
  );
