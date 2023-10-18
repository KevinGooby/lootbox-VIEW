import { AppDataSource } from '../../data-source';
import { NextFunction, Request, Response } from 'express';
//--es-module-specifier-resolution=node
import { User } from '../../entity/User/User.js';
import { IGetUserAuthInfoRequest } from '../../types';

export class UserController {
  private userRepository = AppDataSource.getRepository(User);

  async me(
    request: IGetUserAuthInfoRequest,
    response: Response,
    next: NextFunction
  ) {
    try {
      return request.loggedInUser;
    } catch (error) {
      next(error);
    }
  }
}
