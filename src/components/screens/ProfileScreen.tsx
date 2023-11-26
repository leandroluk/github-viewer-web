import { FC } from 'react';

export type IProfileScreen = Testable;

export const ProfileScreen: FC<IProfileScreen> = ({ testID = 'ProfileScreen' }) => {
  return <div data-testid={testID}>ProfileScreen</div>;
};
