import { ErrorOptions } from './error.types';

export class GenericError extends Error {
  //TODO: errorCode can be enum string, implement custom error codes
  public errorCode: string;
  public httpStatusCode: number;
  public data?: any;
  public errorMessage: string;
  public publicMessage?: string;

  public constructor(message: string, options: ErrorOptions = {}) {
    super(message);
    this.errorCode = options.errorCode;
    this.httpStatusCode = options.httpStatusCode || 500;
    this.data = options.data;
    this.errorMessage = message;
    this.publicMessage = options.publicMessage;
  }

  public get responseData() {
    return {
      message: this.publicMessage,
      code: this.errorCode,
      ...(this.data && { data: this.data }),
    };
  }
}
