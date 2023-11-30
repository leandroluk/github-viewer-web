import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaTimes } from "react-icons/fa";

import { authStore, globalStore } from "#/stores";

export type IHistoryView = Testable;

export const HistoryView: FC<IHistoryView> = ({ testID = "HistoryView" }) => {
  const authState = authStore();
  const globalState = globalStore();

  const getGithubUser = (login: string) => () => {
    globalState.getGithubUser({
      login,
      accessToken: authState.authorization?.accessToken as string,
    });
  };
  return (
    <Box
      h="100%"
      data-testid={testID}
      width="100%"
      display="grid"
      gridTemplateRows="min-content auto"
      borderLeft="1px solid"
      borderLeftColor={useColorModeValue("eco.300", "eco.700")}
    >
      <Box
        display="inline-flex"
        alignItems="center"
        px={4}
        py={2}
        borderBottom={`1px solid var(--chakra-colors-eco-${useColorModeValue(
          "200",
          "900",
        )})`}
      >
        <IconButton
          variant="ghost"
          color="eco"
          isRound
          aria-label="close history"
          icon={<FaTimes />}
          onClick={() => globalState.toggleHistoryOpened(false)}
        />

        <Text pl={2} color="eco" size="h1" fontWeight="bold" flex="1">
          Search History
        </Text>
      </Box>

      <Box overflowY="auto" position="relative">
        <Box position="absolute" left="0" top="0" right="0" px={4} py={2}>
          <List>
            {globalState.searchHistory.map((item, key) => (
              <ListItem
                py={2}
                key={key}
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <Button onClick={getGithubUser(item)}>{item}</Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
