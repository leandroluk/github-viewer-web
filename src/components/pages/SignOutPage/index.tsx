import { FC, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { authStore, privateStore } from '#/stores';

export const SignOutPage: FC = () => {
  useEffect(() => {
    authStore.persist.clearStorage();
    privateStore.persist.clearStorage();
  }, []);

  return (
    <Navigate
      to="/sign-in"
      replace
    />
  );
};
