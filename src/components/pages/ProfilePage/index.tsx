import { FC } from 'react';

import { ProfilePageProps } from './types';

export const ProfilePage: FC<ProfilePageProps> = ({ testID = 'ProfilePage' }) => {
  return <div data-testid={testID}>ProfilePage</div>;
};
