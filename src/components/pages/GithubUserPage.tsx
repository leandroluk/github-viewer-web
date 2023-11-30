import { Container, Grid, GridItem, Show } from "@chakra-ui/react";
import { FC, Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";

import { GithubUserContainer, RepositoryList } from "#/components/organisms";
import { authStore, globalStore } from "#/stores";

export type IGithubUserPage = Testable;

export const GithubUserPage: FC<IGithubUserPage> = ({
  testID = "GithubUserPage",
}) => {
  const authState = authStore();
  const globalState = globalStore();
  const { login } = useParams<{ login: string }>();

  useEffect(() => {
    if (!globalState.githubUser) {
      globalStore.getState().getGithubUser({
        accessToken: authState.authorization?.accessToken as string,
        login: login!,
      });
    }
  }, [globalState.githubUser, authState.authorization, login]);

  if (!globalState.githubUser) return null;

  return (
    <Container
      padding={{ base: 0, md: 4 }}
      data-testid={testID}
      maxW="container.xl"
    >
      <Grid
        paddingY={4}
        gridTemplateColumns={{ base: "auto", md: "240px auto" }}
        gap={4}
      >
        <GridItem>
          <Suspense>
            <Show above="md">
              <GithubUserContainer
                isLoaded={!globalState.loading}
                githubUser={globalState.githubUser}
              />
            </Show>
          </Suspense>
        </GridItem>

        <GridItem>
          <RepositoryList listGithubUserRepo={globalState.listGithubUserRepo} />
        </GridItem>
      </Grid>
    </Container>
  );
};
