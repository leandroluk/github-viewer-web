import { Box, Flex, Grid, GridItem, Hide, Link, Text, VStack } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SvgGithubMark } from '#/components/atoms';
import { SignInForm } from '#/components/organisms';
import { authStore } from '#/stores';
import vars from '#/vars';
import { ISignInPage } from './types';

export const SignInPage: FC<ISignInPage> = ({ testID = 'SignInPage' }) => {
  const authState = authStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.isAuth === true) {
      navigate('/');
    }
  }, [authState.isAuth, navigate]);

  return (
    <Grid
      h="100dvh"
      w="100dhw"
      templateColumns={{ base: '1fr', md: '32em 1fr' }}
      templateRows="1fr"
      data-testid={testID}
      overflow="hidden"
    >
      <GridItem
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100%"
      >
        <VStack gap={10}>
          <Flex
            flex="row"
            alignItems="center"
          >
            <figure>
              <SvgGithubMark
                color="var(--chakra-colors-teal-500)"
                style={{ height: 64 }}
              />
            </figure>

            <Box p={5}>
              <Text
                fontSize="3xl"
                fontWeight="bold"
              >
                Github Viewer
              </Text>
              <Text fontWeight="bold">SIGN IN</Text>
            </Box>
          </Flex>

          <Box w="100%">
            <SignInForm
              isLoading={authState.loading}
              onSubmit={authState.signIn}
            />
          </Box>

          <Box>
            <Text>
              Created by{' '}
              <Link
                isExternal
                href={vars.app.author.url}
                target="_new"
                rel="noreferrer"
              >
                {vars.app.author.name}
              </Link>
            </Text>
          </Box>
        </VStack>
      </GridItem>

      <Hide below="md">
        <GridItem bg="teal" />
      </Hide>
    </Grid>
  );
};
