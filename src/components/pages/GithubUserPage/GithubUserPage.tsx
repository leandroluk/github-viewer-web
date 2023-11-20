import { FC } from 'react';

type GithubUserPageProps = Testable;

export const GithubUserPage: FC<GithubUserPageProps> = ({ testID = 'GithubUserPage' }) => {
  return <div data-testid={testID}>GithubUserPage</div>;
};
