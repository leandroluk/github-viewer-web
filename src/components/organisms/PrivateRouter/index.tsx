import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SearchPage } from '#/components/pages';

export const PrivateRouter: FC = () => {
  return (
    <Routes>
      <Route
        index
        element={<SearchPage />}
      />
    </Routes>
  );
};
