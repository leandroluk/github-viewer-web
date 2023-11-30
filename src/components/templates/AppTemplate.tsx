import { Fade, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { PrivateHeader } from "../organisms/PrivateHeader";

export type IAppBarTemplate = Testable;

export const AppBarTemplate: FC<IAppBarTemplate> = ({ testID }) => {
  return (
    <Fade in>
      <Grid
        h="100dvh"
        maxH="100dvh"
        bg={useColorModeValue("gray.100", "gray.900")}
        gridTemplateRows="64px calc(100dvh - 64px)"
        className="wrapper"
        data-testid={testID}
        overflow="hidden"
      >
        <GridItem zIndex={2}>
          <PrivateHeader />
        </GridItem>

        <GridItem zIndex={1}>
          <Outlet />
        </GridItem>
      </Grid>
    </Fade>
  );
};
