import { FC } from "react";

export type INotFoundPage = Testable;

export const NotFoundPage: FC<INotFoundPage> = ({
  testID = "NotFoundPage",
}) => {
  return <div data-testid={testID}>NotFoundPage</div>;
};
