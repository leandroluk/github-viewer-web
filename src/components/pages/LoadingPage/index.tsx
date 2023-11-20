import { FC } from 'react';

import { LoadingPageProps } from './types';

export const LoadingPage: FC<LoadingPageProps> = ({ testID = 'LoadingPage' }) => {
  return <div data-testid={testID}>LoadingPage</div>;
};
