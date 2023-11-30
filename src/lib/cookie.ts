import { BufferShim } from "buffer-esm";
import Cookies from "universal-cookie";

import vars from "#/vars";

const cookies = new Cookies(null, { path: "/" });

export const cookieManager = {
  setItem(key: string, value: unknown) {
    const stringfiedValue = JSON.stringify(value);
    const hexValue = BufferShim.from(stringfiedValue, "utf8").toString("hex");
    cookies.set(key, hexValue, vars.cookies);
  },

  getItem<T>(key: string): T | undefined {
    try {
      const hexValue = cookies.get(key);
      if (hexValue) {
        const stringfiedValue = BufferShim.from(hexValue, "hex").toString(
          "utf8",
        );
        const value = JSON.parse(stringfiedValue);
        return value;
      }
    } catch {
      /* wrapped only to no throw */
    }
    return undefined;
  },

  removeItem(key: string) {
    cookies.remove(key);
  },
};
