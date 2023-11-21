import { Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { PrivateHeader } from '#/components/organisms';
import { LoadingPage } from '#/components/pages';
import { authStore } from '#/stores';
import { IPrivateTemplate } from './types';

export const PrivateTemplate: FC<IPrivateTemplate> = ({ testID }) => {
  const authState = authStore();

  useEffect(() => {
    authStore.getState().verifyToken();
  }, []);

  if (authState.isAuth === null) {
    return <LoadingPage />;
  }

  if (authState.isAuth === false) {
    return <Navigate to="/sign-out" />;
  }

  return (
    <Grid
      h="100dvh"
      bg={useColorModeValue('gray.100', 'gray.900')}
      gridTemplateRows="64px auto"
      className="wrapper"
      data-testid={testID}
      overflow="hidden"
    >
      <GridItem>
        <PrivateHeader profile={authState.profile} />
      </GridItem>

      <GridItem p={4}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};
