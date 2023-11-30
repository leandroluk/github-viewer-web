export class ConflitError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "ConflitError";
  }

  static is(value: unknown): value is ConflitError {
    return value instanceof ConflitError;
  }
}
