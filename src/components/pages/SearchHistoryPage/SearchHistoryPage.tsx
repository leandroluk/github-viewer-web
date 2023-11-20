import { FC } from 'react';

type SearchHistoryPageProps = Testable;

export const SearchHistoryPage: FC<SearchHistoryPageProps> = ({ testID = 'SearchHistoryPage' }) => {
  return <div data-testid={testID}>SearchHistoryPage</div>;
};
