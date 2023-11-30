import { FC } from "react";

import { IGithubUser } from "#/domain/generics";

export type IGithubAvatarImage = Testable<{
  size: number;
  login: IGithubUser["login"];
}>;

export const GithubAvatarImage: FC<IGithubAvatarImage> = ({
  size,
  login,
  testID = "GithubAvatarImage",
}) => {
  const avatarUrl = `https://avatars.githubusercontent.com/${login}?v=4`;
  return (
    <img
      data-testid={testID}
      width={size}
      height={size}
      style={{ borderRadius: "100%" }}
      src={avatarUrl}
      alt="Github User Avatar"
    />
  );
};
