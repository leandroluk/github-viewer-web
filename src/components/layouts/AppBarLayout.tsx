import { Fade, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { PrivateHeader } from '../organisms/PrivateHeader';

export type IAppBarLayout = Testable<PropsWithChildren>;

export const AppBarLayout: FC<IAppBarLayout> = ({ testID, children }) => {
  return (
    <Fade in>
      <Grid
        h="100dvh"
        maxH="100dvh"
        bg={useColorModeValue('gray.100', 'gray.900')}
        gridTemplateRows="64px calc(100dvh - 64px)"
        className="wrapper"
        data-testid={testID}
        overflow="hidden"
      >
        <GridItem zIndex={2}>
          <PrivateHeader />
        </GridItem>

        <GridItem zIndex={1}>{children}</GridItem>
      </Grid>
    </Fade>
  );
};
