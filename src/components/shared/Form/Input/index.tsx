import { Input, InputGroup } from "@chakra-ui/input";
import { Flex, Text, useColorMode } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  backgroundColor: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  isRequired?: boolean;
  isDisabled?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const CustomInput = ({
  name,
  label,
  placeholder,
  type,
  isRequired,
  isDisabled,
  leftElement,
  rightElement,
  backgroundColor,
  ...rest
}: Props) => {
  const themeColor = useColorMode();
  const methods = useFormContext();

  const { formState } = methods;

  const { errors } = formState;

  const error = errors[name];

  return (
    <Flex direction="column" w="100%">
      <Flex
        direction="column"
        bgColor={backgroundColor}
        p="2"
        rounded="lg"
        w="100%"
        my="2"
        borderColor={error ? "red.500" : "transparent"}
        borderWidth="2px"
        borderStyle="solid"
      >
        <Text
          px="2"
          fontWeight="700"
          color={themeColor.colorMode === "light" ? "black" : "black"}
        >
          {label}
        </Text>
        <InputGroup>
          {leftElement}
          <Input
            {...methods.register(name)}
            isRequired={isRequired}
            isInvalid={!!errors[name]}
            isDisabled={isDisabled}
            type={type}
            border="0px"
            px="2"
            _focus={{
              borderColor: "transparent",
            }}
            _invalid={{
              borderColor: "transparent",
            }}
            color={themeColor.colorMode === "light" ? "black" : "black"}
            {...rest}
          />
          {rightElement}
        </InputGroup>
      </Flex>
      {error && <span role="alert">{error.message}</span>}
    </Flex>
  );
};

export default CustomInput;
