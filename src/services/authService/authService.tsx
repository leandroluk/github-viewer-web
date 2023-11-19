import { IAuthorization } from '#/domain/generics';
import { IAuthService } from './authService.types';

const sleep = async (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))

const mockAuthorization: IAuthorization = {
  accessToken: 'accessToken',
  refreshToken: 'accessToken'
}

const authService: IAuthService = {
  getVerifyToken: async (data) => {
    await sleep()
  },
  postRefreshToken: async (data) => {
    await sleep()
    return mockAuthorization
  },
  postSignIn: async (data) => {
    await sleep()
    return mockAuthorization
  },
  postSignUp: async (data) => {
    await sleep()
  }
}

export default authService