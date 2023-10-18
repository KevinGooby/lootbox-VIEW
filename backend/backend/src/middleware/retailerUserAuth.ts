import { NextFunction, Request, Response } from 'express';
import { GenericError } from '../errors/genericError.js';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { AppDataSource } from '../data-source.js';
import { RetailerUser } from '../entity/RetailerUser/RetailerUser.js';
import { signJwt } from '../utils/jwt.js';
import { IGetUserAuthInfoRequest } from '../types/index.js';
dotenv.config();

// this auth only applies to users not retailers
export const retailerUserAuthorization = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.cookies.retailer_user_access_token;
  const refreshToken = request.cookies.retailer_user_refresh_token;
  const retailerUserRepository = AppDataSource.getRepository(RetailerUser);

  if (!token) {
    throw new GenericError('Unauthorized', {
      httpStatusCode: 401,
      publicMessage: 'Unauthorized',
    });
  }

  try {
    const data = jwt.verify(
      token,
      process.env.JWT_RETAILER_USER_SECRET
    ) as Record<string, any>;

    const foundUser = await retailerUserRepository.findOne({
      where: {
        id: data.userId,
      },
    });

    (request as IGetUserAuthInfoRequest).loggedInUser = foundUser;

    return next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      const data = jwt.verify(
        refreshToken,
        process.env.JWT_RETAILER_USER_REFRESH_SECRET
      ) as Record<string, any>;

      const foundUser = await retailerUserRepository.findOne({
        where: {
          id: data.userId,
        },
      });

      (request as IGetUserAuthInfoRequest).loggedInUser = foundUser;

      if (data) {
        const token = signJwt(
          { userId: foundUser.id, email: foundUser.email },
          process.env.JWT_RETAILER_USER_SECRET,
          {
            expiresIn: '15m',
          }
        );

        const refreshToken = signJwt(
          { userId: foundUser.id, email: foundUser.email },
          process.env.JWT_RETAILER_USER_REFRESH_SECRET,
          {
            expiresIn: '30d',
          }
        );

        response.cookie('retailer_user_access_token', token, {
          httpOnly: false,
          secure: process.env.NODE_ENV === 'production',
        });

        response.cookie('retailer_user_refresh_token', refreshToken, {
          httpOnly: false,
          secure: process.env.NODE_ENV === 'production',
        });
      }

      return next();
    } else {
      throw new GenericError('Something unexpected happened', {
        httpStatusCode: 500,
        publicMessage: 'Something unexpected happened',
      });
    }
  }
};
