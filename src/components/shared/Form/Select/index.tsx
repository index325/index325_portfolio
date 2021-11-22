import { Select } from "chakra-react-select";
import { Flex, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  isRequired?: boolean;
  isDisabled?: boolean;
  options: {
    label: string;
    value: number;
  }[];
}

const CustomSelect = ({ options, name, label, ...rest }: Props) => {
  const methods = useFormContext();

  const { formState } = methods;

  const { errors } = formState;

  const error = errors[name];

  return (
    <Flex direction="column">
      <Text>{label}</Text>
      {/* <Select {...methods.register(name)} {...rest}>
        {options.map((element) => (
          <option key={element.value} value={element.value}>
            {element.label}
          </option>
        ))}
      </Select> */}

      <Select
        // {...methods.register(name)}
        options={[
          {
            label: "I am red",
            value: "i-am-red",
            colorScheme: "red", // The option color scheme overrides the global
          },
          {
            label: "I fallback to purple",
            value: "i-am-purple",
          },
        ]}
        {...rest}
      />

      {error && <span role="alert">{error.message}</span>}
    </Flex>
  );
};

export default CustomSelect;
