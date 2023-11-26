import axios, { AxiosInstance } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

let instance: AxiosInstance | null = null;

export type IAxiosHelper = {
  init(refreshAuthorizationMethod: () => Promise<void>): void;
  getInstance(): AxiosInstance;
};

export const axiosHelper: IAxiosHelper = {
  init: (refreshAuthorizationMethod) => {
    instance = axios.create();
    createAuthRefreshInterceptor(instance, refreshAuthorizationMethod);
  },

  getInstance: () => instance!,
};
