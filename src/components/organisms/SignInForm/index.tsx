import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { joiResolver } from '@hookform/resolvers/joi';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { schema } from './schema';
import { ISignInForm } from './types';

export const SignInForm: FC<ISignInForm> = ({ isLoading = false, onSubmit, testID }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignInForm.OnSubmit.Data>({ resolver: joiResolver(schema) });

  return (
    <form
      data-testid={testID}
      onSubmit={handleSubmit(onSubmit)}
    >
      <VStack gap={5}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            {...register('email')}
            id="email"
            placeholder="john.doe@email.com"
          />
          <FormErrorMessage>{errors.email?.message as string}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            {...register('password')}
            id="password"
            type="password"
            placeholder="*******"
          />
          <FormErrorMessage>{errors.password?.message as string}</FormErrorMessage>
        </FormControl>

        <Button
          w="100%"
          mt={4}
          colorScheme="teal"
          isLoading={isLoading}
          type="submit"
        >
          Submit
        </Button>

        <Divider
          orientation="horizontal"
          color="teal"
        />

        <Box display="inline-flex">
          <Text pr={2}>Don&apos;t have a account?</Text>
          <Link
            color="teal"
            fontWeight="bold"
            href="/sign-up"
          >
            Sign Up
          </Link>
          .
        </Box>
      </VStack>
    </form>
  );
};
