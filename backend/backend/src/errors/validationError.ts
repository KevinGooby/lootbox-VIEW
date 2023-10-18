import { ErrorOptions } from './error.types';
import { GenericError } from './genericError';

type ValidationErrorOptions = ErrorOptions & {
  validations?: Record<string, any>;
};

export class ValidationError extends GenericError {
  public validations: Record<string, any>;

  public constructor(message: string, options: ValidationErrorOptions = {}) {
    super(message, {
      httpStatusCode: 400,
      ...options, // Overwrite defaults
    });
    this.validations = options.validations || {};
  }

  public override get responseData() {
    return {
      ...super.responseData,
      validations: this.validations,
    };
  }

  public override toString() {
    return [
      super.toString(),
      'List of failed Clutch validations',
      ...Object.entries(this.validations).map(
        ([key, value]) => `${key}: ${value}`
      ),
    ].join('\n');
  }
}
