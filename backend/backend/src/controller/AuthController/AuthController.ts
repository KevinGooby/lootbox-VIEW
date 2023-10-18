import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { User } from '../../entity/User/User';
import { GenericError } from '../../errors/genericError';
import bcrypt from 'bcrypt';
import { validatePayload } from '../../utils/validatePayload';
import {
  loginSchema,
  registerSchema,
  retailerLoginSchema,
  retailerRegisterSchema,
} from './authSchema';
import { signJwt } from '../../utils/jwt';
import { RetailerUser } from '../../entity/RetailerUser/RetailerUser';
import * as dotenv from 'dotenv';
import { Retailer } from '../../entity/Retailer/Retailer';
import { Location } from '../../entity/Location/Location';
dotenv.config();

export class AuthController {
  private userRepository = AppDataSource.getRepository(User);
  private retailerUserRepository = AppDataSource.getRepository(RetailerUser);

  private saltRounds = 10;

  async register(request: Request, response: Response, next: NextFunction) {
    try {
      const registerPayload = validatePayload({
        payload: request.body,
        schema: registerSchema,
      });

      const {
        email,
        password,
        confirmPassword,
        username,
        gender,
        firstName,
        lastName,
        dateOfBirth,
      } = registerPayload;

      const userWithEmail = await this.userRepository.findOne({
        where: {
          email,
        },
      });

      const userWithUsername = await this.userRepository.findOne({
        where: {
          email,
        },
      });

      if (userWithEmail || userWithUsername) {
        const errorMessage =
          'User with the following email or username already exists';
        throw new GenericError(errorMessage, {
          httpStatusCode: 409,
          data: {
            username,
            email,
          },
          publicMessage: errorMessage,
        });
      }

      if (password !== confirmPassword) {
        throw new GenericError('Passwords do not match', {
          httpStatusCode: 401,
          publicMessage: 'Passwords do not match',
        });
      }

      const hashedPassword = await bcrypt.hash(password, this.saltRounds);

      const user = Object.assign(new User(), {
        email,
        password: hashedPassword,
        username,
        gender,
        firstName,
        lastName,
        dateOfBirth,
      });

      //create jwt token
      const token = signJwt(
        { userId: user.id, email },
        process.env.JWT_USER_SECRET,
        {
          expiresIn: '15m',
        }
      );

      const refreshToken = signJwt(
        { userId: user.id, email },
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

      return this.userRepository.save(user);
    } catch (error) {
      next(error);
    }
  }

  async login(request: Request, response: Response, next: NextFunction) {
    try {
      const loginPayload = validatePayload({
        payload: request.body,
        schema: loginSchema,
      });

      const { email, password } = loginPayload;

      const user = await this.userRepository.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        throw new GenericError('User not found', {
          httpStatusCode: 404,
          publicMessage: 'User not found',
        });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new GenericError('Invalid password', {
          httpStatusCode: 401,
          publicMessage: 'Invalid password',
        });
      }

      //create jwt token
      //create jwt token
      const token = signJwt(
        { userId: user.id, email },
        process.env.JWT_USER_SECRET,
        {
          expiresIn: '15m',
        }
      );

      const refreshToken = signJwt(
        { userId: user.id, email },
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

      response.cookie('user_access_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      });

      return user;
    } catch (error) {
      next(error);
    }
  }

  async logout(request: Request, response: Response, next: NextFunction) {
    try {
      response.clearCookie('user_access_token');

      return response.status(200).json({
        message: 'Successfully logged out',
      });
    } catch (error) {
      next(error);
    }
  }

  async retailerAdminRegister(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    return AppDataSource.transaction(async (manager) => {
      try {
        const retailerRegisterPayload = validatePayload({
          payload: request.body,
          schema: retailerRegisterSchema,
        });

        const {
          email,
          firstName,
          lastName,
          password,
          confirmPassword,
          role,
          retailer: retailerPayload,
          address,
        } = retailerRegisterPayload;

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

        if (password !== confirmPassword) {
          throw new GenericError('Passwords do not match', {
            httpStatusCode: 401,
            publicMessage: 'Passwords do not match',
          });
        }

        const hashedPassword = await bcrypt.hash(password, this.saltRounds);

        const retailerUser = Object.assign(new RetailerUser(), {
          email,
          password: hashedPassword,
          firstName,
          lastName,
          role,
        });

        const retailerUserData = await manager.save(retailerUser);

        console.log('retailerUserData: ', retailerUserData);

        const retailer = Object.assign(new Retailer(), {
          businessName: retailerPayload.businessName,
          businessPhoneNumber: retailerPayload.businessPhoneNumber,
          industry: retailerPayload.industry,
          category: retailerPayload.category,
          retailerUserId: retailerUserData.id,
          loyaltyType: retailerPayload.loyaltyType,
        });

        const retailerData = await manager.save(retailer);

        const location = Object.assign(new Location(), {
          street: address.street,
          city: address.city,
          province: address.province,
          country: address.country,
          postalCode: address.postalCode,
          unit: address.unit,
          retailerId: retailerData.id,
        });

        const locationData = await manager.save(location);

        const token = signJwt(
          { userId: retailerUser.id, email },
          process.env.JWT_RETAILER_USER_SECRET,
          {
            expiresIn: '15m',
          }
        );

        const refreshToken = signJwt(
          { userId: retailerUser.id, email },
          process.env.JWT_RETAILER_USER_REFRESH_SECRET,
          {
            expiresIn: '30d',
          }
        );

        response.cookie('retailer_user_access_token', token, {
          httpOnly: false,
          sameSite: 'lax',
          secure: process.env.NODE_ENV === 'production',
        });

        response.cookie('retailer_user_refresh_token', refreshToken, {
          httpOnly: false,
          sameSite: 'lax',
          secure: process.env.NODE_ENV === 'production',
        });

        return {
          retailerUser: retailerUserData,
          retailer: retailerData,
          location: locationData,
        };
      } catch (err) {
        next(err);
      }
    });
  }

  async retailerLogin(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const loginPayload = validatePayload({
        payload: request.body,
        schema: retailerLoginSchema,
      });

      const { email, password } = loginPayload;

      const retailerUser = await this.retailerUserRepository.findOne({
        where: {
          email,
        },
      });

      if (!retailerUser) {
        throw new GenericError('User not found', {
          httpStatusCode: 404,
          publicMessage: 'User not found',
        });
      }

      const passwordMatch = await bcrypt.compare(
        password,
        retailerUser.password
      );

      if (!passwordMatch) {
        throw new GenericError('Invalid password', {
          httpStatusCode: 401,
          publicMessage: 'Invalid password',
        });
      }

      //create jwt token
      const token = signJwt(
        { userId: retailerUser.id, email },
        process.env.JWT_RETAILER_USER_SECRET,
        {
          expiresIn: '15m',
        }
      );

      const refreshToken = signJwt(
        { userId: retailerUser.id, email },
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

      return retailerUser;
    } catch (err) {
      next(err);
    }
  }

  async retailerLogout(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      response.clearCookie('retailer_user_access_token');

      return response.status(200).json({
        message: 'Successfully logged out',
      });
    } catch (error) {
      next(error);
    }
  }
}
