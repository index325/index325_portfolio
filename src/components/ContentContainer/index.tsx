import { Flex } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <Flex
      flexDirection="column"
      maxW="1300px"
      w="100%"
      px="4"
      pb="4"
      style={{
        margin: "auto",
      }}
    >
      {children}
    </Flex>
  );
};

export default Container;
