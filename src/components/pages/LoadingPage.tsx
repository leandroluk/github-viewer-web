import { FC } from "react";

export type ILoadingPage = Testable;

export const LoadingPage: FC<ILoadingPage> = ({ testID = "LoadingPage" }) => {
  return <div data-testid={testID}>LoadingPage</div>;
};
