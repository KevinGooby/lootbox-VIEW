import { Request } from 'express';
import { RetailerUser } from '../entity/RetailerUser/RetailerUser';

export interface IGetUserAuthInfoRequest extends Request {
  loggedInUser: RetailerUser;
}
