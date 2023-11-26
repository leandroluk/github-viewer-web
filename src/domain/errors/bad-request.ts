export class BadRequestError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'BadRequestError';
  }

  static is(value: unknown): value is BadRequestError {
    return value instanceof BadRequestError;
  }
}
