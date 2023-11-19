import { IUser } from '#/domain/entities'
import { IAuthorization, IAuthorizedHeaders, IGithubUser } from '#/domain/generics'

export type IAuthService = {
  postRefreshToken: IAuthService.PostRefreshToken
  postSignIn: IAuthService.PostSignIn
  postSignUp: IAuthService.PostSignUp
  getVerifyToken: IAuthService.GetVerifyToken
}
export namespace IAuthService {
  export type PostRefreshToken = (data: PostRefreshToken.Data) => Promise<PostRefreshToken.Result>
  export namespace PostRefreshToken {
    export type Data = {
      headers: IAuthorizedHeaders
    }
    export type Result = IAuthorization | null
  }
  export type PostSignIn = (data: PostSignIn.Data) => Promise<PostSignIn.Result>
  export namespace PostSignIn {
    export type Data = {
      body: Pick<IUser, 'email' | 'password'>
    }
    export type Result = IAuthorization | null
  }
  export type PostSignUp = (data: PostSignUp.Data) => Promise<void>
  export namespace PostSignUp {
    export type Data = {
      body: Pick<IUser, 'email' | 'password'> & {
        _github: Pick<IGithubUser, 'login'>
      }
    }
  }
  export type GetVerifyToken = (data: GetVerifyToken.Data) => Promise<void>
  export namespace GetVerifyToken {
    export type Data = {
      headers: IAuthorizedHeaders
    }
    export type Result = IAuthorization | null
  }
}