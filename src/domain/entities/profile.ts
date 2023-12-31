import { IGithubUser } from "#/domain/generics";
import { IUser } from "./user";

export type IProfile = Pick<IUser, "id" | "createdAt" | "email"> & {
  _github: IGithubUser;
};
