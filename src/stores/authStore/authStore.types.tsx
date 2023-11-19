import { IProfile, IUser } from '#/domain/entities'
import { IAuthorization, IGithubUser } from '#/domain/generics'

export type IAuthStore = IAuthStore.State & IAuthStore.Actions
export namespace IAuthStore {
  export type State = {
    loading: null | boolean
    error: null | Error
    authorization: null | IAuthorization
    profile: null | IProfile
  }
  export type Actions = {
    signIn(data: SignIn.Data): Promise<SignIn.Result>
    signUp(data: SignUp.Data): Promise<void>
    verifyToken(): Promise<void>
    refreshToken(): Promise<RefreshToken.Result>
    signOut(): void
  }
  export namespace SignIn {
    export type Data = Pick<IUser, 'email' | 'password'>
    export type Result = IAuthorization | null
  }
  export namespace SignUp {
    export type Data = Pick<IUser, 'email' | 'password'> & {
      _github: Pick<IGithubUser, 'login'>
    }
  }
  export namespace RefreshToken {
    export type Result = IAuthorization | null
  }
}
