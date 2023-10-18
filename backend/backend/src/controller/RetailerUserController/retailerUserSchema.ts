import Joi from 'joi';

export const createRetailerUserSChema = Joi.object({
  role: Joi.string().required(),
  email: Joi.string().email().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  retailerId: Joi.string().required(),
});
