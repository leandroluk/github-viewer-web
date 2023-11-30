import {
  Box,
  Link,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowCircleLeft,
  FaBuilding,
  FaExternalLinkSquareAlt,
  FaMailBulk,
  FaPrescriptionBottle,
  FaTwitter,
} from "react-icons/fa";

import { GithubAvatarImage } from "#/components/atoms";
import { IGithubUser } from "#/domain/generics";

export type IGithubUserContainer = Testable<{
  isLoaded: boolean;
  githubUser: IGithubUser;
}>;

export const GithubUserContainer: FC<IGithubUserContainer> = ({
  testID = "GithubUserContainer",
  isLoaded,
  githubUser,
}) => {
  const avatarImageSize = 240;
  const {
    login = "unknown",
    name = "Unknown",
    followersCount = 0,
    followingCount = 0,
    publicReposCount = 0,
    bio = "Não há conteúdo disponível.",
    email,
    company,
    blogUrl,
    twitterUsername,
  } = githubUser;

  return (
    <VStack
      data-testid={testID}
      gap={4}
      w="100%"
      display="flex"
      justifyContent="stretch"
      alignItems="stretch"
    >
      <SkeletonCircle
        isLoaded={isLoaded}
        height={avatarImageSize}
        width={avatarImageSize}
      >
        <Link
          href={`https://github.com/${login}`}
          target="_blank"
          aria-label={`View ${login} on GitHub`}
        >
          <GithubAvatarImage
            size={avatarImageSize}
            login={githubUser.login ?? ""}
          />
        </Link>
      </SkeletonCircle>

      <Box>
        <SkeletonText isLoaded={isLoaded}>
          <Text fontSize="3xl" fontWeight="bold">
            {name}
          </Text>
        </SkeletonText>

        <SkeletonText isLoaded={isLoaded}>
          <Text fontSize="md" opacity="0.5">
            #{login}
          </Text>
        </SkeletonText>
      </Box>

      <Box>
        <SkeletonText isLoaded={isLoaded}>
          <Text textAlign="justify" fontStyle="italic">
            {bio}
          </Text>
        </SkeletonText>
      </Box>

      <List>
        <SkeletonText isLoaded={isLoaded}>
          <ListItem display="inline-flex" alignItems="center" gap={4}>
            <FaArrowAltCircleRight /> Seguidores: {followersCount}
          </ListItem>
        </SkeletonText>

        <SkeletonText isLoaded={isLoaded}>
          <ListItem display="inline-flex" alignItems="center" gap={4}>
            <FaArrowCircleLeft /> Seguindo: {followingCount}
          </ListItem>
        </SkeletonText>

        <SkeletonText isLoaded={isLoaded}>
          <ListItem display="inline-flex" alignItems="center" gap={4}>
            <FaPrescriptionBottle /> Nº de repositórios: {publicReposCount}
          </ListItem>
        </SkeletonText>

        <SkeletonText isLoaded={isLoaded}>
          {email && (
            <Link
              href={`mailto:${email}`}
              target="_blank"
              aria-label={`Send email to ${login}`}
            >
              <ListItem display="inline-flex" alignItems="center" gap={4}>
                <FaMailBulk /> {email}
              </ListItem>
            </Link>
          )}
        </SkeletonText>

        <SkeletonText isLoaded={isLoaded}>
          {company && (
            <ListItem display="inline-flex" alignItems="center" gap={4}>
              <FaBuilding /> {company}
            </ListItem>
          )}
        </SkeletonText>

        <SkeletonText isLoaded={isLoaded}>
          {blogUrl && (
            <Link
              href={blogUrl}
              target="_blank"
              aria-label={`Go to blog url of ${login}`}
            >
              <Tooltip label={blogUrl}>
                <ListItem
                  display="inline-flex"
                  alignItems="center"
                  gap={4}
                  overflow="hidden"
                  maxW={240}
                >
                  <FaExternalLinkSquareAlt />{" "}
                  <Text isTruncated> {blogUrl} </Text>
                </ListItem>
              </Tooltip>
            </Link>
          )}
        </SkeletonText>

        <SkeletonText isLoaded={isLoaded}>
          {twitterUsername && (
            <Link
              href={`https://twitter.com/${twitterUsername}`}
              target="_blank"
              aria-label={`Go to twitter of ${login}`}
            >
              <ListItem display="inline-flex" alignItems="center" gap={4}>
                <FaTwitter /> {twitterUsername}
              </ListItem>
            </Link>
          )}
        </SkeletonText>
      </List>
    </VStack>
  );
};
