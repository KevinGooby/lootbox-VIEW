import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import { AppDataSource } from './data-source.js';
import { userRoutes } from './routes/userRoutes/userRoutes.js';
import { routeRegister } from './utils/routeRegister.js';
import { retailerRoutes } from './routes/retailerRoutes/retailerRoutes.js';
import { retailerUserRoutes } from './routes/retailerUserRoutes/retailerUserRoutes.js';
import { authRoutes } from './routes/authRoutes/authRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler.js';
import { stampRoutes } from './routes/stampRoutes/stampRoutes.js';

try {
  await AppDataSource.initialize();
  console.log('Data Source has been initialized!');
} catch (err) {
  console.error('Error during Data Source initialization:', err);
}

//TODO: switch to ts-node-dev

// create express app
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: [
      // Local development
      'http://localhost:3000',
      'http://127.0.0.1:3000',
    ],
  })
);
// register express routes from defined application routes
routeRegister(userRoutes, app);
routeRegister(retailerRoutes, app);
routeRegister(retailerUserRoutes, app);
routeRegister(authRoutes, app);
routeRegister(stampRoutes, app);

//has to be after the routes
app.use(errorHandler);

// start express server
app.listen(process.env.PORT);
