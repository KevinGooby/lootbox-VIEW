import { SignOptions } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import { GenericError } from '../errors/genericError';
import * as dotenv from 'dotenv';
dotenv.config();

//Sign Access or Refresh Token
export const signJwt = (
  payload: Object,
  secret: string,
  options?: SignOptions
) => {
  return jwt.sign(payload, secret, {
    ...options,
  });
};

//Verify Access or Refresh Token
export const verifyJwt = <T>(token: string, secret: string): T | null => {
  try {
    const decoded = jwt.verify(token, secret) as T;

    return decoded;
  } catch (error) {
    throw new GenericError('Invalid token', {
      httpStatusCode: 401,
      publicMessage: 'Invalid token',
    });
  }
};
