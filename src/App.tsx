import { ChakraProvider, cookieStorageManager } from "@chakra-ui/react";
import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CustomRouter } from "./Router";
import { GithubCornerLink } from "./components/atoms";
import { PrivateRoute } from "./components/molecules";
import {
  GithubUserPage,
  NotFoundPage,
  SearchGithubPage,
  SignInPage,
  SignOutPage,
  SignUpPage,
} from "./components/pages";
import { AppBarTemplate, FeaturedPageTemplate } from "./components/templates";
import { COOKIES_AUTH_STORE } from "./constants";
import { axios, cookieManager } from "./lib";
import customHistory from "./lib/history";
import { IAuthStore, authStore } from "./stores";
import theme from "./theme";

// inject store data from cookies if exists
const store = cookieManager.getItem<IAuthStore>(COOKIES_AUTH_STORE);
if (store) {
  authStore.setState(store);
}

// inject refreshToken in axios interceptor
axios.init(authStore.getState().refreshToken);

// verify token if can't define if is authenticated
if (authStore.getState().isAuth === null) {
  authStore.getState().verifyToken();
}

export const App: FC = () => {
  return (
    <ChakraProvider theme={theme} colorModeManager={cookieStorageManager}>
      <GithubCornerLink />
      <CustomRouter history={customHistory}>
        <Routes>
          <Route path="auth/*" element={<FeaturedPageTemplate />}>
            <Route index element={<Navigate to="sign-in" />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="sign-out" element={<SignOutPage />} />
          </Route>

          <Route
            path="/*"
            element={<PrivateRoute element={<AppBarTemplate />} />}
          >
            <Route index element={<Navigate to="github" />} />
            <Route path="github" element={<SearchGithubPage />} />
            <Route path="github/:login" element={<GithubUserPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CustomRouter>
    </ChakraProvider>
  );
};
