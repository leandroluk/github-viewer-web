import { FC } from 'react';

import { INotFoundPage } from './types';

export const NotFoundPage: FC<INotFoundPage> = ({ testID }) => {
  return <div data-testid={testID}>NotFoundPage</div>;
};
