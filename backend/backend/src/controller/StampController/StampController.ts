import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { Stamp } from '../../entity/Stamp/Stamp';
import { validatePayload } from '../../utils/validatePayload';
import { createStampSchema } from './stampSchema';
import { GenericError } from '../../errors/genericError';
import { IGetUserAuthInfoRequest } from '../../types';

export class StampController {
  private stampRepository = AppDataSource.getRepository(Stamp);

  async stamps(
    request: IGetUserAuthInfoRequest,
    response: Response,
    next: NextFunction
  ) {
    const retailerId = request.params.retailerId;

    try {
      return this.stampRepository.find({
        where: {
          retailer: {
            id: retailerId,
          },
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const createStampPayload = validatePayload({
        payload: request.body,
        schema: createStampSchema,
      });

      const existingStamp = await this.stampRepository.findOne({
        where: {
          name: createStampPayload.name,
          retailer: {
            id: createStampPayload.retailerId,
          },
        },
      });

      if (existingStamp) {
        throw new GenericError('The stamp name already exists for this user', {
          httpStatusCode: 400,
          publicMessage: 'The stamp name already exists for this user',
        });
      }

      const stamp = Object.assign(new Stamp(), createStampPayload);

      return this.stampRepository.save(stamp);
    } catch (error) {
      next(error);
    }
  }
}
