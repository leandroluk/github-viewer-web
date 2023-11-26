export class UnauthorizedError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'UnauthorizedError';
  }

  static is(value: unknown): value is UnauthorizedError {
    return value instanceof UnauthorizedError;
  }
}
