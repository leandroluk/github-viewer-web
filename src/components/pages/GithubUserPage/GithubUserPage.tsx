import { FC } from "react";

import { GithubUserPageProps } from './GithubUserPage.types';

const GithubUserPage: FC<GithubUserPageProps> = (props) => {
  return (
    <div data-testid={props.testID}>
      GithubUserPage
    </div>
  )
}

GithubUserPage.displayName = 'GithubUserPage'
GithubUserPage.defaultProps = {
  testID: GithubUserPage.displayName
}

export default GithubUserPage