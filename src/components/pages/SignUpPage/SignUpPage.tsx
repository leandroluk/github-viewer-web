import { FC } from 'react';

type SignUpPageProps = Testable;

export const SignUpPage: FC<SignUpPageProps> = ({ testID = 'SignUpPage' }) => {
  return <div data-testid={testID}>SignUpPage</div>;
};
