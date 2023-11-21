import { IProfile, IUser } from '#/domain/entities';
import { IAuthorization, IGithubUser } from '#/domain/generics';

export type AuthStore = AuthStore.State & AuthStore.Actions;
export namespace AuthStore {
  export type State = {
    loading: boolean;
    error: null | Error;
    isAuth: null | boolean;
    authorization: null | IAuthorization;
    profile: null | IProfile;
  };
  export type Actions = {
    signIn(data: SignIn.Data): Promise<void>;
    signUp(data: SignUp.Data): Promise<void>;
    verifyToken(): Promise<void>;
    refreshToken(): Promise<RefreshToken.Result>;
  };
  export namespace SignIn {
    export type Data = Pick<IUser, 'email' | 'password'>;
    export type Result = IAuthorization | null;
  }
  export namespace SignUp {
    export type Data = Pick<IUser, 'email' | 'password'> & {
      _github: Pick<IGithubUser, 'login'>;
    };
  }
  export namespace RefreshToken {
    export type Result = IAuthorization | null;
  }
}
