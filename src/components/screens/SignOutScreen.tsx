import { FC } from 'react';

export type ISignOutScreen = Testable;

export const SignOutScreen: FC<ISignOutScreen> = ({ testID = 'SignOutScreen' }) => {
  return <div data-testid={testID}>SignOutScreen</div>;
};
