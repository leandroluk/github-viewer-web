import { Box, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { PublicFormFooter, PublicFormHeader } from "#/components/molecules";
import { SignInForm } from "#/components/organisms";
import { authStore } from "#/stores";

export type ISignInPage = Testable;

export const SignInPage: FC<ISignInPage> = ({ testID = "SignInPage" }) => {
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
        <PublicFormHeader subtitle="SIGN IN" />

        <SignInForm isLoading={authState.loading} onSubmit={authState.signIn} />

        <PublicFormFooter />
      </VStack>
    </Box>
  );
};
