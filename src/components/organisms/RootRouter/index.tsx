import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NotFoundPage, SignInPage, SignUpPage } from '#/components/pages';

export const RootRouter: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<div />}
      />

      <Route
        path="/sign-in"
        element={<SignInPage />}
      />

      <Route
        path="/sign-up"
        element={<SignUpPage />}
      />

      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
};
