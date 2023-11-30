import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { FormErrorMessage, SimpleInput } from "#/components/atoms";
import { PasswordInput } from "#/components/molecules";
import { IUser } from "#/domain/entities";

export type ISignInForm = Testable<{
  isLoading?: boolean;
  onSubmit(value: ISignInForm.Schema): void;
}>;
export namespace ISignInForm {
  export type Schema = Pick<IUser, "email" | "password">;
}

const schema = Joi.object<ISignInForm.Schema>({
  email: Joi.string().label("E-mail").required(),
  password: Joi.string().label("Password").required(),
});

export const SignInForm: FC<ISignInForm> = ({
  testID,
  isLoading,
  onSubmit,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignInForm.Schema>({ resolver: joiResolver(schema) });

  return (
    <Box
      w="100%"
      as="form"
      data-testid={testID}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <VStack gap={4}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <SimpleInput
            {...register("email")}
            variant="filled"
            id="email"
            placeholder="john.doe@email.com"
          />
          <FormErrorMessage>{errors.email?.message as string}</FormErrorMessage>
        </FormControl>

        <FormControl colorScheme="eco" isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <PasswordInput
            {...register("password")}
            variant="filled"
            id="password"
            type="password"
            placeholder="*******"
          />
          <FormErrorMessage>
            {errors.password?.message as string}
          </FormErrorMessage>
        </FormControl>

        <Button
          w="100%"
          mt={4}
          bg="eco.500"
          color="white"
          isLoading={isLoading}
          type="submit"
        >
          Sign in
        </Button>

        <Divider orientation="horizontal" color="eco" />

        <Box display="inline-flex">
          <Text pr={2}>Don&apos;t have a account?</Text>
          <Link color="eco" fontWeight="bold" href="/sign-up">
            Sign up
          </Link>
          .
        </Box>
      </VStack>
    </Box>
  );
};
