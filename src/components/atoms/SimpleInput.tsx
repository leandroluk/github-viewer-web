import { forwardRef, Input, InputProps, SystemStyleObject } from '@chakra-ui/react';

export type ISimpleInput = InputProps & {
  sx?: SystemStyleObject;
};

export const SimpleInput = forwardRef<ISimpleInput, 'input'>((props, ref) => {
  return (
    <Input
      ref={ref}
      sx={{
        ':focus-visible': {
          boxShadow: `0 0 0 1px var(--chakra-colors-eco-500) !important`,
          borderColor: 'var(--chakra-colors-eco-500)',
        },
      }}
      {...props}
    />
  );
}) as unknown as typeof Input;
