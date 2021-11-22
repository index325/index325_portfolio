import { Divider, Flex } from "@chakra-ui/react";

const CustomDivider = () => {
  return (
    <Flex justifyContent="center" alignItems="center" my="6">
      <Divider w="85px" borderColor="orange" border="2px solid" rounded="lg" />
    </Flex>
  );
};

export default CustomDivider;
