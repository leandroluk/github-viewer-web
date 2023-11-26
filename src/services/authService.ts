import axios, { isAxiosError } from 'axios';

import { IUser } from '#/domain/entities';
import { BadRequestError, ConflitError, ForbiddenError, UnauthorizedError } from '#/domain/errors';
import { IAuthorization, IGithubUser } from '#/domain/generics';
import vars from '#/vars';
import { ServerError } from '../domain/errors/server';

export const authService = {
  async getVerifyToken(accessToken: IAuthorization['accessToken']): Promise<void> {
    const url = `${vars.endpoints.api}/auth/verify`;
    const headers = { authorization: `Bearer ${accessToken}` };
    await axios.get(url, { headers });
  },

  async postRefreshToken(accessToken: IAuthorization['accessToken']): Promise<IAuthorization> {
    const url = `${vars.endpoints.api}/auth/refresh`;
    const headers = { authorization: `Bearer ${accessToken}` };
    const response = await axios.post<IAuthorization>(url, null, { headers });
    return response.data;
  },

  async postSignIn(body: Pick<IUser, 'email' | 'password'>): Promise<IAuthorization> {
    try {
      const url = `${vars.endpoints.api}/auth/sign-in`;
      const response = await axios.post<IAuthorization>(url, body);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 401) {
          throw new UnauthorizedError('Invalid email or password');
        }
        if (error.code === 'ERR_NETWORK') {
          throw new ServerError('Oops... We have a problem with the server ... Try later again 😕');
        }
      }
      throw error;
    }
  },

  async postSignUp(body: Pick<IUser, 'email' | 'password'> & { _github: Pick<IGithubUser, 'login'> }): Promise<void> {
    try {
      const url = `${vars.endpoints.api}/auth/sign-up`;
      await axios.post(url, body);
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const { message, status } = error.response.data;
        if (status === 400) throw new BadRequestError(message);
        if (status === 403) throw new ForbiddenError(message);
        if (status === 409) throw new ConflitError(message);
      }
      throw error;
    }
  },
};
