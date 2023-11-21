import Joi from 'joi';

export const schema = Joi.object<SignInFormProps.OnSubmit.Data>({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
