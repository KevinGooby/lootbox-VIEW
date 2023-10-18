import { ValidationError } from '../errors/validationError';

export const validatePayload = ({ payload, schema, options = {} }) => {
  const { error, value } = schema.validate(payload, options);

  if (error) {
    throw new ValidationError(error.annotate(), {
      validations: error,
    });
  }

  return value;
};
