import * as dotenv from 'dotenv';
dotenv.config();

import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User/User.js';
import { RetailerUser } from './entity/RetailerUser/RetailerUser.js';
import { Retailer } from './entity/Retailer/Retailer.js';
import { UserStampPoint } from './entity/UserStampPoint/UserStampPoint.js';
import { RetailerSubscriber } from './subscriber/retailer/retailer.js';
import { Location } from './entity/Location/Location.js';
import { Stamp } from './entity/Stamp/Stamp.js';
import { Point } from './entity/Point/Point.js';

export const AppDataSource = new DataSource({
  type: 'postgres',
  //change to localhost if connecting locally, its called db because docker container is called db
  host: 'db',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [
    User,
    RetailerUser,
    Retailer,
    UserStampPoint,
    Location,
    Stamp,
    Point,
  ],
  migrations: ['src/migrations/*.ts'],
  subscribers: [RetailerSubscriber],
});
