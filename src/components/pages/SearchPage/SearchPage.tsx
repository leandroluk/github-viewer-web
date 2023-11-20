import { FC } from 'react';

type SearchPageProps = Testable;

export const SearchPage: FC<SearchPageProps> = ({ testID = 'SearchPage' }) => {
  return <div data-testid={testID}>SearchPage</div>;
};
