import { FC } from 'react';

import { IProfilePage } from './types';

export const ProfilePage: FC<IProfilePage> = ({ testID = 'ProfilePage' }) => {
  return <div data-testid={testID}>ProfilePage</div>;
};
