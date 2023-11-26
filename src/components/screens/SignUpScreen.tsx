import { Box, VStack, useToast } from '@chakra-ui/react';
import { FC, useEffect } from 'react';

import { FeaturedPageLayout } from '#/components/layouts';
import { PublicFormFooter, PublicFormHeader } from '#/components/molecules';
import { authStore } from '#/stores';

import { SignUpForm } from '#/components/organisms';

export type ISignUpScreen = Testable;

export const SignUpScreen: FC<ISignUpScreen> = ({ testID = 'SignUpScreen' }: ISignUpScreen) => {
  const authState = authStore();
  const toast = useToast();

  useEffect(() => {
    if (authState.error) {
      toast({
        id: authState.error?.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        description: authState.error?.message,
        onCloseComplete: authState.clearError,
      });
    }
  }, [authState.clearError, authState.error, toast]);

  return (
    <FeaturedPageLayout>
      <Box
        data-testid={testID}
        display="flex"
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        flex="1"
        p={8}
      >
        <VStack
          gap={8}
          maxW="400px"
          m="auto"
        >
          <PublicFormHeader subtitle="SIGN UP" />

          <SignUpForm
            isLoading={authState.loading}
            onSubmit={authState.signUp}
          />

          <PublicFormFooter />
        </VStack>
      </Box>
    </FeaturedPageLayout>
  );
};
