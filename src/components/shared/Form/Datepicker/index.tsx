import { Input, InputGroup } from "@chakra-ui/input";
import { Flex, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import ReactDatepicker from "react-datepicker";
import { forwardRef, useRef, useState } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./customDatePickerStyle.css";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  isRequired?: boolean;
  isDisabled?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const Datepicker = ({
  name,
  label,
  placeholder,
  type,
  isRequired,
  isDisabled,
  leftElement,
  rightElement,
  ...rest
}: Props) => {
  const variant = useBreakpointValue({
    base: true,
    xs: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
    xxl: false,
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const methods = useFormContext();

  const { formState, setValue } = methods;

  const { errors } = formState;

  const error = errors[name];

  const datepickerRef = useRef(null);

  const ExampleCustomInput = forwardRef((props: any, ref: any) => {
    return (
      <Input
        onClick={props.onClick}
        onChange={props.onChange}
        ref={ref}
        value={selectedDate ? format(selectedDate, "dd/MM/yyyy") : ""}
      />
    );
  });

  return (
    <Flex direction="column">
      <Text>{label}</Text>
      <InputGroup>
        {leftElement}
        <div className="customDatePickerWidth">
          <ReactDatepicker
            {...methods.register(name)}
            closeOnScroll={(e) => e.target === document}
            ref={datepickerRef}
            selected={selectedDate}
            onChange={(value: Date) => {
              setValue(name, value);
              setSelectedDate(value);
            }}
            popperProps={{
              positionFixed: true,
            }}
            withPortal={variant}
            dateFormat="dd/MM/yyyy"
            customInput={<ExampleCustomInput />}
            {...rest}
          />
        </div>

        {rightElement}
      </InputGroup>
      {error && <span role="alert">{error.message}</span>}
    </Flex>
  );
};

export default Datepicker;
