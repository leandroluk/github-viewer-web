/* eslint-disable @typescript-eslint/no-explicit-any */

import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

let instance: AxiosInstance | null = null;

export const axios = {
  init: (refreshMethod: () => Promise<void>) => {
    createAuthRefreshInterceptor((instance = Axios.create()), refreshMethod);
  },
  get: <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ) => instance!.get<T, R, D>(url, config),
  post: <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ) => instance!.post<T, R, D>(url, data, config),
  put: <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ) => instance!.put<T, R, D>(url, data, config),
  patch: <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ) => instance!.patch<T, R, D>(url, data, config),
};
