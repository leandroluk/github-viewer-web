export class NotFoundError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "NotFoundError";
  }

  static is(value: unknown): value is NotFoundError {
    return value instanceof NotFoundError;
  }
}
