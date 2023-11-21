import { FC } from 'react';

import { ISignUpPage } from './types';

export const SignUpPage: FC<ISignUpPage> = ({ testID = 'SignUpPage' }) => {
  return <div data-testid={testID}>SignUpPage</div>;
};
