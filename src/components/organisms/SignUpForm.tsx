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
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";

import { FC } from "react";
import { FormErrorMessage, SimpleInput } from "#/components/atoms";
import { PasswordInput } from "#/components/molecules";
import { MESSAGES_PASSWORD, REGEX_PASSWORD } from "#/constants";
import { IUser } from "#/domain/entities";
import { IGithubUser } from "#/domain/generics";

export type ISignUpForm = Testable<{
  isLoading?: boolean;
  onSubmit(value: ISignUpForm.Schema): void;
}>;
export namespace ISignUpForm {
  export type Schema = Pick<IUser, "email" | "password"> & {
    _github: Pick<IGithubUser, "login">;
  };
}

const schema = Joi.object<ISignUpForm.Schema>({
  email: Joi.string()
    .label("E-mail")
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string() //
    .label("Password")
    .pattern(REGEX_PASSWORD)
    .message(MESSAGES_PASSWORD)
    .required(),
  _github: Joi.object<ISignUpForm.Schema["_github"]>({
    login: Joi.string().label("Github Login").required(),
  }).required(),
});

export const SignUpForm: FC<ISignUpForm> = ({
  testID,
  isLoading,
  onSubmit,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignUpForm.Schema>({ resolver: joiResolver(schema) });

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
            autoComplete="off"
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
            autoComplete="new-password"
          />
          <FormErrorMessage>
            {errors.password?.message as string}
          </FormErrorMessage>
        </FormControl>

        <FormControl colorScheme="eco" isInvalid={!!errors._github?.login}>
          <FormLabel htmlFor="_github.login">Github Login</FormLabel>
          <SimpleInput
            {...register("_github.login")}
            variant="filled"
            id="_github.login"
            type="text"
            placeholder="john.doe"
            autoComplete="off"
          />
          <FormErrorMessage>
            {errors._github?.login?.message as string}
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
          Submit
        </Button>

        <Divider orientation="horizontal" color="eco" />

        <Box display="inline-flex">
          <Text pr={2}>Already a account?</Text>
          <Link color="eco" fontWeight="bold" href="/sign-in">
            Sign in
          </Link>
          .
        </Box>
      </VStack>
    </Box>
  );
};
