import { FC } from "react";

export type IIndexPage = Testable;

export const IndexPage: FC<IIndexPage> = ({ testID = "IndexPage" }) => {
  return <div data-testid={testID}>IndexPage</div>;
};
