import { IEntity } from '#/domain/generics';

export type IUser = IEntity & {
  email: string;
  password: string;
};
