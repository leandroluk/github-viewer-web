import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NotFoundPage, ProfilePage, SearchPage, SignInPage, SignOutPage, SignUpPage } from '#/components/pages';

import { PrivateTemplate } from '../PrivateTemplate';

import { IMainTemplate } from './types';

export const MainTemplate: FC<IMainTemplate> = ({ testID = 'MainTemplate' }) => {
  return (
    <div data-testid={testID}>
      <Routes>
        <Route
          path="/sign-in"
          element={<SignInPage />}
        />
        <Route
          path="/sign-up"
          element={<SignUpPage />}
        />
        <Route
          path="/sign-out"
          element={<SignOutPage />}
        />
        <Route
          path="/"
          element={<PrivateTemplate />}
        >
          <Route
            index
            element={<SearchPage />}
          />
          <Route
            path="profile"
            element={<ProfilePage />}
          />
        </Route>
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </div>
  );
};
