import { FC } from 'react';
import { ISearchPage } from './types';

export const SearchPage: FC<ISearchPage> = ({ testID = 'SearchPage' }) => {
  return <div data-testid={testID}>SearchPage</div>;
};
