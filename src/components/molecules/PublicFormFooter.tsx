import { Box, Link } from "@chakra-ui/react";
import { FC } from "react";

export type IPublicFormFooter = Testable;

export const PublicFormFooter: FC<IPublicFormFooter> = ({
  testID = "PublicFormFooter",
}) => {
  return (
    <Box
      data-testid={testID}
      fontSize="xs"
      fontStyle="italic"
      opacity={0.5}
      _hover={{ opacity: 1 }}
      transition="all 0.2s ease-in-out"
    >
      Created by{" "}
      <Link
        color="eco.900"
        href="https://www.linkedin.com/in/leandroluk/"
        target="_blank"
        fontWeight="bold"
      >
        Leandro Santiago Gomes
      </Link>
    </Box>
  );
};
