import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { Retailer } from '../../entity/Retailer/Retailer';
import { IGetUserAuthInfoRequest } from '../../types';
import { Roles } from '../../entity/RetailerUser/RetailerUser.types';
import { GenericError } from '../../errors/genericError';
import { validateUuidV4 } from '../../utils/validateUuidv4';
import { editRetailerSchema, updateUserLoyaltySchema } from './retailerSchema';
import { validatePayload } from '../../utils/validatePayload';
import { LoyaltyType } from '../../entity/Retailer/Retailer.types';
import { UserStampPoint } from '../../entity/UserStampPoint/UserStampPoint';
import { Stamp } from '../../entity/Stamp/Stamp';

export class RetailerController {
  private retailerRepository = AppDataSource.getRepository(Retailer);
  private userStampPointRepository =
    AppDataSource.getRepository(UserStampPoint);
  private stampRepository = AppDataSource.getRepository(Stamp);

  async retailers(
    request: IGetUserAuthInfoRequest,
    response: Response,
    next: NextFunction
  ) {
    try {
      const userId = request.loggedInUser.id;

      return this.retailerRepository.find({
        where: {
          retailerUser: {
            id: userId,
          },
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async retailerStamp(
    request: IGetUserAuthInfoRequest,
    response: Response,
    next: NextFunction
  ) {
    console.log('in here');

    try {
      const retailerId = validateUuidV4(request.params, 'retailerId');

      return this.stampRepository.find({
        where: {
          retailer: {
            id: retailerId,
          },
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async updateRetailerInfo(
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

      const retailerId = validateUuidV4(request.params, 'retailerId');

      const retailer = await this.retailerRepository.findOne({
        where: {
          id: retailerId,
        },
      });

      if (!retailer) {
        throw new GenericError('Retailer not found', {
          httpStatusCode: 404,
          publicMessage: 'Retailer not found',
        });
      }

      const editRetailerPayload = validatePayload({
        payload: request.body,
        schema: editRetailerSchema,
      });

      return this.retailerRepository.save({
        ...retailer,
        ...editRetailerPayload,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateUserLoyaltyPoints(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const retailerId = validateUuidV4(request.params, 'retailerId');

      const retailer = await this.retailerRepository.findOne({
        where: {
          id: retailerId,
        },
      });

      if (!retailer) {
        throw new GenericError('Retailer not found', {
          httpStatusCode: 404,
          publicMessage: 'Retailer not found',
        });
      }

      const updateUserLoyaltyPointsPayload = validatePayload({
        payload: request.body,
        schema: updateUserLoyaltySchema,
      });

      const userId = validateUuidV4(
        updateUserLoyaltyPointsPayload,
        'userId'
      ) as any;

      //TODO: fix these typing issues
      const userStampPoint = await this.userStampPointRepository.findOne({
        where: {
          userId,
          //@ts-ignore
          retailerId,
        },
      });

      if (retailer.loyaltyType === LoyaltyType.POINTS) {
        return this.userStampPointRepository.save({
          ...userStampPoint,
          points: userStampPoint.points + updateUserLoyaltyPointsPayload.points,
        });
      }

      return this.userStampPointRepository.save({
        ...userStampPoint,
        timesVisited:
          userStampPoint.timesVisited +
          updateUserLoyaltyPointsPayload.timesVisited,
      });
    } catch (error) {
      next(error);
    }
  }
}
