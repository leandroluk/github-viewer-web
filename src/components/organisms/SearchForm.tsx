import {
  Button,
  FormControl,
  HStack,
  Heading,
  Input,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

import { authStore, globalStore } from "#/stores";

export type ISearchForm = Testable<{}>;
export namespace ISearchForm {
  export namespace OnSubmit {
    export type Data = {
      login: string;
    };
  }
}

const schema = Joi.object<ISearchForm.OnSubmit.Data>({
  login: Joi.string().required(),
});

export const SearchForm: FC<ISearchForm> = ({ testID }) => {
  const authState = authStore();
  const globalState = globalStore();
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISearchForm.OnSubmit.Data>({
    resolver: joiResolver(schema),
    defaultValues: {
      login: globalState.searchValue,
    },
  });

  useEffect(() => {
    if (errors.login) {
      toast({
        title: "Oops...",
        description: errors.login.message,
        status: "error",
        isClosable: true,
      });
    }
  }, [toast, errors]);

  const onSubmit = (data: ISearchForm.OnSubmit.Data) => {
    globalState.getGithubUser({
      accessToken: authState.authorization!.accessToken,
      login: data.login,
    });
  };

  return (
    <form data-testid={testID} onSubmit={handleSubmit(onSubmit)}>
      <VStack gap={4}>
        <Heading size="lg" pb={4}>
          Search a Github User login
        </Heading>

        <FormControl isInvalid={!!errors.login}>
          <Input
            color="eco"
            bg={useColorModeValue("white", "black")}
            size="lg"
            {...register("login")}
            id="login"
            placeholder="Search for a github user"
          />
        </FormControl>

        <HStack w="100%" gap={4}>
          <Button
            variant="link"
            w="100%"
            onClick={() => globalState.toggleHistoryOpened()}
          >
            View history
          </Button>

          <Button
            w="100%"
            colorScheme="eco"
            isLoading={globalState.loading}
            type="submit"
            leftIcon={<FaSearch />}
          >
            Search
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};
