import { FC } from 'react';

import { SignUpPageProps } from './types';

export const SignUpPage: FC<SignUpPageProps> = ({ testID = 'SignUpPage' }) => {
  return <div data-testid={testID}>SignUpPage</div>;
};
