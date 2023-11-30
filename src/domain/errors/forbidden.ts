export class ForbiddenError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "ForbiddenError";
  }

  static is(value: unknown): value is ForbiddenError {
    return value instanceof ForbiddenError;
  }
}
