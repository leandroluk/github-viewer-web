import { FC } from 'react';

export type ISearchResultScreen = Testable;

export const SearchResultScreen: FC<ISearchResultScreen> = ({ testID = 'SearchResultScreen' }) => {
  return <div data-testid={testID}>SearchResultScreen</div>;
};
