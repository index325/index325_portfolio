import { Tooltip, TooltipProps } from "@chakra-ui/tooltip";

interface Props {
  children: React.ReactNode;
  text: TooltipProps["label"];
  placement: TooltipProps["placement"];
  hasArrow: TooltipProps["hasArrow"];
}

const CustomTooltip = ({
  children,
  text,
  placement = "bottom",
  hasArrow = false,
  ...rest
}: Props) => {
  return (
    <Tooltip label={text} placement={placement} hasArrow={hasArrow} {...rest}>
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
