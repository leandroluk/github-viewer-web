import { FC } from 'react';

import { ILoadingPage } from './types';

export const LoadingPage: FC<ILoadingPage> = ({ testID = 'LoadingPage' }) => {
  return <div data-testid={testID}>LoadingPage</div>;
};
