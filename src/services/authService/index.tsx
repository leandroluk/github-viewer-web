import { type IAuthorization } from '#/domain/generics';
import { type IAuthService } from './types';

const sleep = async (ms = 1000) => {
  await new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

const mockAuthorization: IAuthorization = {
  accessToken: 'accessToken',
  refreshToken: 'accessToken',
};

export const authService: IAuthService = {
  getVerifyToken: async (data) => {
    console.log('getVerifyToken', data);
    await sleep();
  },
  postRefreshToken: async (data) => {
    console.log('postRefreshToken', data);
    await sleep();
    return mockAuthorization;
  },
  postSignIn: async (data) => {
    console.log('postSignIn', data);
    await sleep();
    return mockAuthorization;
  },
  postSignUp: async (data) => {
    console.log('postSignUp', data);
    await sleep();
  },
};
