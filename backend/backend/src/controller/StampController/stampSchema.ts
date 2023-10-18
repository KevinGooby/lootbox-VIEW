import Joi from 'joi';

export const createStampSchema = Joi.object({
  name: Joi.string().required(),
  redemptionCheckpoints: Joi.array().items(Joi.number()).required(),
  discountPercentage: Joi.number().required(),
  visitsNeededPerRedemption: Joi.number().required(),
  retailerId: Joi.string().required(),
});
