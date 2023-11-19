import { FC } from "react";

import { SearchHistoryPageProps } from './SearchHistoryPage.types';

const SearchHistoryPage: FC<SearchHistoryPageProps> = (props) => {
  return (
    <div data-testid={props.testID}>
      SearchHistoryPage
    </div>
  )
}

SearchHistoryPage.displayName = 'SearchHistoryPage'
SearchHistoryPage.defaultProps = {
  testID: SearchHistoryPage.displayName
}

export default SearchHistoryPage