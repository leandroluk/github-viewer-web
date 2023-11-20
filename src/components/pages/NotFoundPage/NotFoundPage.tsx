import { FC } from 'react';

type NotFoundPageProps = Testable;

export const NotFoundPage: FC<NotFoundPageProps> = ({ testID }) => {
  return <div data-testid={testID}>NotFoundPage</div>;
};
