import { Box, VStack } from "@chakra-ui/react";
import { FC } from "react";

import { PublicFormFooter, PublicFormHeader } from "#/components/molecules";
import { SignUpForm } from "#/components/organisms";
import { authStore } from "#/stores";

export type ISignUpPage = Testable;

export const SignUpPage: FC<ISignUpPage> = ({ testID = "SignUpPage" }) => {
  const authState = authStore();

  return (
    <Box
      data-testid={testID}
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
      flex="1"
      p={8}
    >
      <VStack gap={8} maxW="400px" m="auto">
        <PublicFormHeader subtitle="SIGN UP" />

        <SignUpForm isLoading={authState.loading} onSubmit={authState.signUp} />

        <PublicFormFooter />
      </VStack>
    </Box>
  );
};
