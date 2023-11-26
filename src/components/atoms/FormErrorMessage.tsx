import {
  FormErrorMessage as ChakraFormErrorMessage,
  FormErrorMessageProps as ChakraFormErrorMessageProps,
  SystemStyleObject,
  forwardRef,
} from '@chakra-ui/react';

export type IFormErrorMessage = Testable<
  ChakraFormErrorMessageProps & {
    sx?: SystemStyleObject;
  }
>;

export const FormErrorMessage = forwardRef<IFormErrorMessage, 'div'>(
  ({ testID, textAlign = 'justify', children, ...restFormErrorMessageProps }, ref) => {
    return (
      <ChakraFormErrorMessage
        data-testid={testID}
        {...restFormErrorMessageProps}
        textAlign={textAlign}
        ref={ref}
      >
        {children}
      </ChakraFormErrorMessage>
    );
  }
) as typeof ChakraFormErrorMessage;
