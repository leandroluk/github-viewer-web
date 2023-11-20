import { FC } from 'react';

import { SearchHistoryPageProps } from './types';

export const SearchHistoryPage: FC<SearchHistoryPageProps> = ({ testID = 'SearchHistoryPage' }) => {
  return <div data-testid={testID}>SearchHistoryPage</div>;
};
