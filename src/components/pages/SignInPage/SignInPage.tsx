import { FC } from 'react';

import { SignInPageProps } from './types';

export const SignInPage: FC<SignInPageProps> = ({ testID = 'SignInPage' }) => {
  return <div data-testid={testID}>SignInPage</div>;
};
