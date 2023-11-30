import {
  Box,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSignOutAlt,
  FaSun,
  FaUser,
} from "react-icons/fa";
import { GithubAvatarImage, SvgGithubMark } from "#/components/atoms";
import customHistory from "#/lib/history";
import { authStore } from "#/stores";

export type IPrivateHeader = Testable;

export const PrivateHeader: FC<IPrivateHeader> = ({
  testID = "PrivateHeader",
}) => {
  const authState = authStore();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("white", "black")}
      display="flex"
      justifyContent="center"
      alignItems="center"
      data-testid={testID}
      borderBottom="1px solid"
      borderBottomColor={`var(--chakra-colors-eco-${useColorModeValue(
        "200",
        "900",
      )})`}
    >
      <Container maxW="container.xl" display="flex">
        <Box
          paddingX={4}
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <SvgGithubMark
            color="var(--chakra-colors-eco-500)"
            style={{ height: 32 }}
          />

          <Text padding={5} size="h1" fontWeight="bold">
            Github Viewer
          </Text>

          <IconButton
            mr={2}
            isRound
            color="eco"
            variant="link"
            aria-label="toggle theme"
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            fontSize={16}
          />

          <IconButton
            as="a"
            mr={2}
            color="eco"
            variant="link"
            aria-label="link to github"
            icon={<FaGithub />}
            target="_new"
            href="https://github.com/leandroluk/"
            fontSize={16}
          />

          <IconButton
            isRound
            as="a"
            target="_new"
            href="https://www.linkedin.com/in/leandroluk/"
            color="eco"
            variant="link"
            aria-label="link to github"
            icon={<FaLinkedin />}
            fontSize={16}
            mr={2}
          />
        </Box>

        <Box
          ml="auto"
          display="flex"
          justifyContent="center"
          paddingY={3}
          paddingX={4}
        >
          <Menu>
            <Tooltip
              bg="eco"
              label={authState.profile?._github.name}
              placement="left"
            >
              <MenuButton style={{ boxShadow: "none" }} p="0">
                <GithubAvatarImage
                  size={40}
                  login={authState.profile?._github.login ?? ""}
                />
              </MenuButton>
            </Tooltip>

            <MenuList>
              <MenuItem onClick={() => customHistory.push("/profile")}>
                <Box color="eco">
                  <FaUser />
                </Box>
                <Text paddingX={3}>My Profile</Text>
              </MenuItem>

              <Divider color="eco" />

              <MenuItem onClick={() => customHistory.replace("/auth/sign-out")}>
                <Box color="eco">
                  <FaSignOutAlt />
                </Box>
                <Text paddingX={3}>Sign out</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};
