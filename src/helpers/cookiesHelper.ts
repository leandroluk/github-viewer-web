import { BufferShim } from 'buffer-esm';
import Cookies, { CookieSetOptions } from 'universal-cookie';

import vars from '../vars';

export const cookiesHelper = (strCookies?: string | null, defaultSetOptions: CookieSetOptions = { path: '/' }) => {
  const cookies = new Cookies(strCookies, defaultSetOptions);

  return {
    setItem(key: string, value: unknown) {
      const stringfiedValue = JSON.stringify(value);
      const hexValue = BufferShim.from(stringfiedValue, 'ascii').toString('hex');
      cookies.set(key, hexValue, vars.cookies);
    },

    getItem<T>(key: string): T | null {
      try {
        const hexValue = cookies.get(key);
        if (hexValue) {
          const stringfiedValue = BufferShim.from(hexValue, 'hex').toString('ascii');
          const value = JSON.parse(stringfiedValue);
          return value;
        }
      } catch {
        /* wrapped only to no throw */
      }
      return null;
    },

    removeItem(key: string) {
      cookies.remove(key);
    },
  };
};
