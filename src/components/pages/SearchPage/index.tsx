import { FC } from 'react';

import { SearchPageProps } from './types';

export const SearchPage: FC<SearchPageProps> = ({ testID = 'SearchPage' }) => {
  return <div data-testid={testID}>SearchPage</div>;
};
