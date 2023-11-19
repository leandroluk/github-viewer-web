import { FC } from "react";

import { ProfilePageProps } from './ProfilePage.types';

const ProfilePage: FC<ProfilePageProps> = (props) => {
  return (
    <div data-testid={props.testID}>
      ProfilePage
    </div>
  )
}

ProfilePage.displayName = 'ProfilePage'
ProfilePage.defaultProps = {
  testID: ProfilePage.displayName
}

export default ProfilePage