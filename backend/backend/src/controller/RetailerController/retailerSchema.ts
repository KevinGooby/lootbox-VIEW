import Joi from 'joi';

export const editRetailerSchema = Joi.object({
  companyName: Joi.string(),
  companyPhoneNumber: Joi.string(),
  industry: Joi.string(),
  category: Joi.string(),
  businessType: Joi.string(),
  address: Joi.object({}),
  spendingNeededPerPoint: Joi.number(),
  pointToDollarValue: Joi.number(),
  redemptionCheckpoints: Joi.array().items(Joi.number()),
  discountPercentage: Joi.number(),
  visitsNeededPerRedemption: Joi.number(),
});

export const updateUserLoyaltySchema = Joi.object({
  userId: Joi.string().required(),
  points: Joi.number(),
  timesVisited: Joi.number(),
});
