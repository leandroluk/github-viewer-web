import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { AppBarLayout } from '#/components/layouts';

export type ISearchGithubScreen = Testable;

export const SearchGithubScreen: FC<ISearchGithubScreen> = ({ testID = 'SearchGithubScreen' }) => {
  return (
    <AppBarLayout>
      <Box data-testid={testID}>SearchGithubScreen</Box>
    </AppBarLayout>
  );
};
