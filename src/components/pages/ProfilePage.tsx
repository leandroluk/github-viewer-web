import { FC } from "react";

export type IProfilePage = Testable;

export const ProfilePage: FC<IProfilePage> = ({ testID = "ProfilePage" }) => {
  return <div data-testid={testID}>ProfilePage</div>;
};
