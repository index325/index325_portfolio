import { Flex, Divider, Box } from "@chakra-ui/react";
interface Props {
  color: string;
  size: number;
}

const dividerCalculation = (size: number) => {
  const dividerWidthAndHeight = (100 - size) / 2;
  return dividerWidthAndHeight;
};

const DividerWithDot = ({ color, size }: Props) => (
  <Flex maxHeight="100px" direction="column" alignItems="center" px="4">
    <Divider orientation="vertical" h={dividerCalculation(size)} />
    <Box
      h={size}
      w={`${size}px`}
      rounded="lg"
      className="teste"
      bgColor={color}
    />
    <Divider orientation="vertical" h={dividerCalculation(size)} />
  </Flex>
);

export default DividerWithDot;
