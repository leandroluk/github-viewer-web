import { FC, useEffect } from "react";
import { COOKIES_AUTH_STORE } from "#/constants";
import { cookieManager } from "#/lib";
import customHistory from "#/lib/history";
import { authStore } from "#/stores";

export const SignOutPage: FC = () => {
  useEffect(() => {
    authStore.getState().signOut();
    cookieManager.removeItem(COOKIES_AUTH_STORE);
    customHistory.replace("/auth");
  });
  return null;
};
