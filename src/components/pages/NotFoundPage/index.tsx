import { FC } from 'react';

import { NotFoundPageProps } from './types';

export const NotFoundPage: FC<NotFoundPageProps> = ({ testID }) => {
  return <div data-testid={testID}>NotFoundPage</div>;
};
