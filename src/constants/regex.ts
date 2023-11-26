export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const PASSWORD_MESSAGE =
  '"{{#label}}" must have at least 8 characters including a lowercase letter, an uppercase letter, a number and a special character';
