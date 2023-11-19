import { FC } from "react";

import { LoadingPageProps } from './LoadingPage.types';

const LoadingPage: FC<LoadingPageProps> = (props) => {
  return (
    <div data-testid={props.testID}>
      LoadingPage
    </div>
  )
}

LoadingPage.displayName = 'LoadingPage'
LoadingPage.defaultProps = {
  testID: LoadingPage.displayName
}

export default LoadingPage