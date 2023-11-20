import { FC } from 'react';

type SignInPageProps = Testable;

export const SignInPage: FC<SignInPageProps> = ({ testID = 'SignInPage' }) => {
  return <div data-testid={testID}>SignInPage</div>;
};
