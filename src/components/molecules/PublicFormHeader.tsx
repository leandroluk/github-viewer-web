import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { SvgGithubMark } from "#/components/atoms";

export type IPublicFormHeader = Testable<{
  subtitle: string;
}>;

export const PublicFormHeader: FC<IPublicFormHeader> = ({
  testID = "PublicFormHeader",
  subtitle,
}) => {
  return (
    <Box
      data-testid={testID}
      display="flex"
      flexDirection="row"
      alignItems="center"
      gap={4}
    >
      <SvgGithubMark style={{ width: 100 }} />

      <Box>
        <Text fontSize="4xl" fontWeight="bold">
          Github Viewer
        </Text>
        <Text fontWeight="bold">{subtitle}</Text>
      </Box>
    </Box>
  );
};
