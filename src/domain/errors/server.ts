export class ServerError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "ServerError";
  }

  static is(value: unknown): value is ServerError {
    return value instanceof ServerError;
  }
}
