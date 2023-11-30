import { Box, Fade, Show, useColorModeValue } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { AnimatedRotatedGradientBox, SvgSubtlePrism } from "../atoms";

export type IFeaturedPageTemplate = Testable<PropsWithChildren>;

export const FeaturedPageTemplate: FC<IFeaturedPageTemplate> = ({
  testID = "FeaturedPageTemplate",
}) => {
  return (
    <Fade in>
      <Box
        data-testid={testID}
        display="flex"
        flexDirection="row"
        overflow="hidden"
        height="100dvh"
        width="100dvw"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="stretch"
          alignItems="stretch"
          minW={{ base: "100%", md: "40rem" }}
          height="100dvh"
        >
          <Outlet />
        </Box>

        <Show above="md">
          <Box position="relative" w="100%">
            <SvgSubtlePrism
              style={{ height: "100%" }}
              backgroundColor={useColorModeValue("eco.900", "eco.50")}
            />
            <AnimatedRotatedGradientBox
              firstColor={useColorModeValue(
                "rgba(183, 231, 179, 0.5)",
                "rgba(53, 153, 46, 0.5)",
              )}
              secondColor="rgba(92, 200, 81, 1)"
              position="absolute"
              left={0}
              top={0}
              bottom={0}
              right={0}
            />
          </Box>
        </Show>
      </Box>
    </Fade>
  );
};
