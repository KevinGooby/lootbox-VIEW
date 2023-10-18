import { NextFunction, Request, Response } from 'express';
import { GenericError } from '../errors/genericError.js';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { User } from '../entity/User/User.js';
import { AppDataSource } from '../data-source.js';
import { signJwt } from '../utils/jwt.js';
dotenv.config();

interface IGetUserAuthInfoRequest extends Request {
  loggedInUser: User;
}

// this auth only applies to users not retailers
export const userAuthorization = async (
  request: IGetUserAuthInfoRequest,
  response: Response,
  next: NextFunction
) => {
  const token = request.cookies.user_access_token;
  const refreshToken = request.cookies.user_refresh_token;
  const userRepository = AppDataSource.getRepository(User);

  if (!token) {
    throw new GenericError('Unauthorized', {
      httpStatusCode: 401,
      publicMessage: 'Unauthorized',
    });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_USER_SECRET) as Record<
      string,
      any
    >;

    const foundUser = await userRepository.findOne({
      where: {
        id: data.userId,
      },
    });

    request.loggedInUser = foundUser;

    return next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      const data = jwt.verify(
        refreshToken,
        process.env.JWT_USER_REFRESH_SECRET
      ) as Record<string, any>;

      const foundUser = await userRepository.findOne({
        where: {
          id: data.userId,
        },
      });

      (request as IGetUserAuthInfoRequest).loggedInUser = foundUser;

      if (data) {
        const token = signJwt(
          { userId: foundUser.id, email: foundUser.email },
          process.env.JWT_USER_SECRET,
          {
            expiresIn: '15m',
          }
        );

        const refreshToken = signJwt(
          { userId: foundUser.id, email: foundUser.email },
          process.env.JWT_USER_REFRESH_SECRET,
          {
            expiresIn: '30d',
          }
        );

        response.cookie('user_access_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
        });

        response.cookie('user_refresh_token', refreshToken, {
          httpOnly: true,
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
