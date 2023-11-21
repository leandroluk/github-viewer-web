import { FC } from 'react';

import { IGithubUserPage } from './types';

export const GithubUserPage: FC<IGithubUserPage> = ({ testID = 'GithubUserPage' }) => {
  return <div data-testid={testID}>GithubUserPage</div>;
};
