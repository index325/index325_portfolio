import { Flex, GridItem, Heading, Image, Text, Stack } from "@chakra-ui/react";

import Facebook from "@Images/facebook.png";
import Linkedin from "@Images/linkedin.png";
import Instagram from "@Images/instagram.png";

const Footer = () => {
  return (
    <Flex w="100%">
      <Flex
        templateColumns={["1fr", "1fr", "1fr", " 1fr"]}
        w="100%"
        bgColor="black"
        color="white"
        py={[4, 16]}
        px={[4, 10, 32]}
        direction="column"
        alignItems="center"
      >
        <GridItem>
          <Heading as="h3" size="sm" textAlign="center">
            INDEX325
          </Heading>
          <Text color="gray.300" mt="5" fontSize={["0.8rem", "xl"]} w="100%">
            Normal people don't change the world.
          </Text>
        </GridItem>

        <GridItem mt={["10", "4"]}>
          <Heading
            as="h3"
            size="sm"
            textTransform="uppercase"
            textAlign="center"
          >
            Social media
          </Heading>
          <Stack
            direction="row"
            mt="4"
            spacing="8"
            justifyContent={["center", "center", "unset"]}
          >
            <Image
              cursor="pointer"
              w="24px"
              src={Facebook}
              alt="TV1 - Logo"
              gridColumn="1"
            />
            <Image
              cursor="pointer"
              w="24px"
              src={Instagram}
              alt="TV1 - Logo"
              gridColumn="1"
            />
            <Image
              cursor="pointer"
              w="24px"
              src={Linkedin}
              alt="TV1 - Logo"
              gridColumn="1"
            />
          </Stack>
        </GridItem>
      </Flex>
    </Flex>
  );
};

export default Footer;
