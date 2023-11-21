import {
  Box,
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
} from '@chakra-ui/react';
import { FC } from 'react';
import { FaGithub, FaLinkedin, FaMoon, FaSignOutAlt, FaSun, FaUser } from 'react-icons/fa';

import { SvgGithubMark } from '#/components/atoms';
import { IPrivateHeader } from './types';

export const PrivateHeader: FC<IPrivateHeader> = ({ testID = 'PrivateHeader', profile }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const avatarUrl = `https://avatars.githubusercontent.com/${profile?._github.login}?v=4`;

  return (
    <Box
      bg={useColorModeValue('white', 'black')}
      display="flex"
      justifyContent="center"
      alignItems="center"
      data-testid={testID}
      borderBottom="1px solid"
      borderBottomColor={`var(--chakra-colors-teal-${useColorModeValue('200', '900')})`}
    >
      <Box
        paddingX={4}
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <SvgGithubMark
          color="var(--chakra-colors-teal-500)"
          style={{ height: 32 }}
        />

        <Text
          padding={5}
          size="h1"
          fontWeight="bold"
        >
          Github Viewer
        </Text>

        <IconButton
          mr={2}
          isRound
          color="teal"
          variant="link"
          aria-label="toggle theme"
          icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
          fontSize={16}
        />

        <IconButton
          as="a"
          mr={2}
          color="teal"
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
          color="teal"
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
            bg="teal"
            label={profile?._github.name}
            placement="left"
          >
            <MenuButton
              style={{ boxShadow: 'none' }}
              p="0"
            >
              <img
                style={{ height: 40, borderRadius: '100%' }}
                src={avatarUrl}
                alt="Github User Avatar"
              />
            </MenuButton>
          </Tooltip>
          <MenuList>
            <MenuItem>
              <Box color="teal">
                <FaUser />
              </Box>
              <Text paddingX={3}>My Profile</Text>
            </MenuItem>

            <Divider color="teal" />

            <MenuItem>
              <Box color="teal">
                <FaSignOutAlt />
              </Box>
              <Text paddingX={3}>Sign out</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};
