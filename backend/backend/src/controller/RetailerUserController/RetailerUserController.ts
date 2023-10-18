import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../../data-source.js';
import { RetailerUser } from '../../entity/RetailerUser/RetailerUser.js';
import { IGetUserAuthInfoRequest } from '../../types/index.js';
import { Roles } from '../../entity/RetailerUser/RetailerUser.types.js';
import { GenericError } from '../../errors/genericError.js';
import { validatePayload } from '../../utils/validatePayload.js';
import { createRetailerUserSChema } from './retailerUserSchema.js';
import bcrypt from 'bcrypt';
import { validateUuidV4 } from '../../utils/validateUuidv4.js';

export class RetailerUserController {
  private retailerUserRepository = AppDataSource.getRepository(RetailerUser);
  private saltRounds = 10;

  async all(request: Request, response: Response, next: NextFunction) {
    return this.retailerUserRepository.find();
  }

  async createRetailerUserForRetailer(
    request: IGetUserAuthInfoRequest,
    response: Response,
    next: NextFunction
  ) {
    try {
      const currentRole = request.loggedInUser.role;

      if (currentRole !== Roles.ADMIN) {
        throw new GenericError('Unauthorized', {
          httpStatusCode: 401,
          publicMessage: 'Unauthorized',
          data: {
            currentRole,
          },
        });
      }

      const createRetailerUserPayload = validatePayload({
        payload: request.body,
        schema: createRetailerUserSChema,
      });

      const { role, email, firstName, lastName, retailerId } =
        createRetailerUserPayload;

      const retailerWithEmail = await this.retailerUserRepository.findOne({
        where: {
          email,
        },
      });

      if (retailerWithEmail) {
        const errorMessage = 'User with the following email already exists';
        throw new GenericError(errorMessage, {
          httpStatusCode: 409,
          data: {
            email,
          },
          publicMessage: errorMessage,
        });
      }

      const hashedPassword = await bcrypt.hash(
        'temp-password',
        this.saltRounds
      );

      const retailerUser = this.retailerUserRepository.create({
        role,
        email,
        firstName,
        lastName,
        password: hashedPassword,
      });

      return this.retailerUserRepository.save(retailerUser);
    } catch (error) {
      next(error);
    }
  }

  async deleteRetailerUserForRetailer(
    request: IGetUserAuthInfoRequest,
    response: Response,
    next: NextFunction
  ) {
    try {
      const currentRole = request.loggedInUser.role;

      if (currentRole !== Roles.ADMIN) {
        throw new GenericError('Unauthorized', {
          httpStatusCode: 401,
          publicMessage: 'Unauthorized',
          data: {
            currentRole,
          },
        });
      }

      const retailerUserId = validateUuidV4(request.params, 'retailerUserId');

      const retailerUser = await this.retailerUserRepository.findOne({
        where: {
          id: retailerUserId,
        },
      });

      if (!retailerUser) {
        throw new GenericError('Retailer user not found', {
          httpStatusCode: 404,
          publicMessage: 'Retailer user not found',
        });
      }

      return this.retailerUserRepository.remove(retailerUser);
    } catch (error) {
      next(error);
    }
  }
}
