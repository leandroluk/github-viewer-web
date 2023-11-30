import { Box, chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { FC } from "react";

import { globalStore } from "../../stores";
import { HistoryView, SearchForm } from "../organisms";

export type ISearchGithubPage = Testable;

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const SearchGithubPage: FC<ISearchGithubPage> = ({
  testID = "SearchGithubPage",
}) => {
  const globalState = globalStore();

  return (
    <Box
      data-testid={testID}
      display="grid"
      gridTemplateColumns="7fr auto"
      gridTemplateAreas="'main history'"
      height="100%"
    >
      <Box
        gridArea="main"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SearchForm />
      </Box>

      <ChakraBox
        gridArea="history"
        position="relative"
        transition="all 0.25s cubic-bezier(0.4, 0.0, 0.2, 1)"
        animate={globalState.searchHistoryOpened ? "open" : "closed"}
        initial="closed"
        variants={{ open: { width: "25rem" }, closed: { width: 0 } }}
      >
        <Box position="absolute" left="0" bottom="0" right="0" top="0">
          <HistoryView />
        </Box>
      </ChakraBox>
    </Box>
  );
};
