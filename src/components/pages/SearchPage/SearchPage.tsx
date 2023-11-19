import { FC } from "react";

import { SearchPageProps } from './SearchPage.types';

const SearchPage: FC<SearchPageProps> = (props) => {
  return (
    <div data-testid={props.testID}>
      SearchPage
    </div>
  )
}

SearchPage.displayName = 'SearchPage'
SearchPage.defaultProps = {
  testID: SearchPage.displayName
}

export default SearchPage