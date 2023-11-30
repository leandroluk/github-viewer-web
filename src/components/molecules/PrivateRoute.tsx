import { FC, ReactElement, Suspense } from "react";
import { Navigate } from "react-router-dom";

import { LoadingPage } from "#/components/pages";
import { authStore } from "#/stores/authStore";

export type IPrivateRoute = {
  element: ReactElement;
};

export const PrivateRoute: FC<IPrivateRoute> = ({ element }) => {
  const { isAuth } = authStore();

  return (
    <Suspense fallback={<LoadingPage />}>
      {isAuth === null && null}
      {isAuth === false && <Navigate to="/auth" replace />}
      {isAuth === true && element}
    </Suspense>
  );
};
