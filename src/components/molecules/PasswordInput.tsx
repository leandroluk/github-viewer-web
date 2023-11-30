import {
  IconButton,
  InputGroup,
  InputRightElement,
  forwardRef,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { ISimpleInput, SimpleInput } from "#/components/atoms";

export type IPasswordInput = Omit<ISimpleInput, "type"> & {
  variant?: ISimpleInput["variant"];
  onToggleVisible?: (isVisible: boolean) => void;
};

export const PasswordInput = forwardRef<IPasswordInput, "input">(
  (
    {
      onToggleVisible,
      variant,
      size,
      colorScheme,
      pr,
      ...restPasswordInputProps
    },
    ref,
  ) => {
    const rightRef = useRef<HTMLButtonElement | null>(null);
    const [isVisible, setIsVisible] = useState<Boolean>(false);

    const handleToggleVisible = () => {
      const newValue = !isVisible;
      setIsVisible(newValue);
      onToggleVisible?.(newValue);
    };

    return (
      <InputGroup size={size} pr={pr}>
        <SimpleInput
          {...restPasswordInputProps}
          colorScheme={colorScheme}
          variant={variant}
          pr={`calc(${
            rightRef.current?.clientWidth ?? 0
          }px + var(--input-padding))`}
          ref={ref}
          size={size}
          type={isVisible ? "text" : "password"}
        />
        <InputRightElement width={`${rightRef.current?.clientWidth}px`} mr={1}>
          <IconButton
            colorScheme={colorScheme}
            aria-label="toggle visible"
            ref={rightRef}
            h="1.75rem"
            size="sm"
            onClick={handleToggleVisible}
            icon={isVisible ? <FaEyeSlash /> : <FaEye />}
          />
        </InputRightElement>
      </InputGroup>
    );
  },
);
