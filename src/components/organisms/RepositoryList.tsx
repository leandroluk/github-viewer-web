import {
  Card,
  CardBody,
  CardHeader,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { IGithubUserRepo } from "#/domain/generics";

export type IRepositoryList = Testable<{
  listGithubUserRepo: IGithubUserRepo[];
}>;

export const RepositoryList: FC<IRepositoryList> = ({
  testID = "RepositoryList",
  listGithubUserRepo,
}) => {
  return (
    <SimpleGrid
      px={8}
      width="100%"
      columns={{ base: 1, md: 2, lg: 3 }}
      gap={4}
      data-testid={testID}
    >
      {listGithubUserRepo.map((item, key) => (
        <Link
          key={key}
          as={Card}
          href={item.linkUrl}
          aria-label="View source on GitHub"
        >
          <CardHeader display="flex" alignItems="center" color="eco.500">
            <Text flex="1" fontWeight="bold" isTruncated>
              {item.name}
            </Text>{" "}
            <FaExternalLinkSquareAlt />
          </CardHeader>

          <CardBody fontSize="sm" fontStyle="italic">
            {item.description ?? "não há conteúdo disponível"}
          </CardBody>
        </Link>
      ))}
    </SimpleGrid>
  );
};
