import { IUser } from '.';
import { IGithubUser } from '../generics';

export type IProfile = Pick<IUser, 'id' | 'createdAt' | 'email'> & {
  _github: IGithubUser
};
