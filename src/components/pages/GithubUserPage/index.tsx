import { FC } from 'react';

import { GithubUserPageProps } from './types';

export const GithubUserPage: FC<GithubUserPageProps> = ({ testID = 'GithubUserPage' }) => {
  return <div data-testid={testID}>GithubUserPage</div>;
};
