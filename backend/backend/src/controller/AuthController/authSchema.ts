import Joi from 'joi';

export const addressSchema = Joi.object({
  street: Joi.string().required(),
  city: Joi.string().required(),
  province: Joi.string().required(),
  postalCode: Joi.string().required(),
  country: Joi.string().required(),
  unit: Joi.number(),
});

export const retailerSchema = Joi.object({
  businessName: Joi.string().required(),
  businessPhoneNumber: Joi.string().required(),
  industry: Joi.string().required(),
  category: Joi.string().required(),
  loyaltyType: Joi.string().required(),
});

export const registerSchema = Joi.object({
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  username: Joi.string().min(3).required(),
  gender: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  email: Joi.string().email().required(),
});

export const loginSchema = Joi.object({
  password: Joi.string().min(8).required(),
  username: Joi.string().min(3).required(),
});

export const retailerRegisterSchema = Joi.object({
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().required(),
  retailer: retailerSchema,
  address: addressSchema,
});

export const retailerLoginSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
});
