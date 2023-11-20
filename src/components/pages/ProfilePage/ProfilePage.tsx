import { FC } from 'react';

type ProfilePageProps = Testable;

export const ProfilePage: FC<ProfilePageProps> = ({ testID = 'ProfilePage' }) => {
  return <div data-testid={testID}>ProfilePage</div>;
};
