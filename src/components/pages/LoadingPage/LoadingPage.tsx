import { FC } from 'react';

type LoadingPageProps = Testable;

export const LoadingPage: FC<LoadingPageProps> = ({ testID = 'LoadingPage' }) => {
  return <div data-testid={testID}>LoadingPage</div>;
};
