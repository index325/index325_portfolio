import {
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Link,
  Button,
} from "@chakra-ui/react";
import Facebook from "@Images/facebook.png";
import Linkedin from "@Images/linkedin.png";
import Instagram from "@Images/instagram.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { scroller } from "react-scroll";
import AnimatedContainer from "@Components/shared/AnimatedContainer";

const Banner = () => {
  return (
    <Flex
      w="100%"
      minHeight="100vh"
      h="100%"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgColor="gray.700"
    >
      <Flex
        maxWidth="1500px"
        direction={["column", "column", "column", "row"]}
        px="15px"
        alignItems="center"
        justifyContent="center"
        h="100%"
        w="100%"
        m="auto"
      >
        <Stack
          direction={["row", "row", "row", "column"]}
          h={["100%", "100%", "100%", "100%", "100vh"]}
          justifyContent="center"
          alignItems="center"
          spacing="4"
          mt={["16", "20", "20", "20", "0"]}
        >
          <Link href="https://www.facebook.com/index325/" isExternal>
            <Image w="24px" src={Facebook} alt="TV1 - Logo" gridColumn="1" />
          </Link>
          <Link href="https://www.facebook.com/index325/" isExternal>
            <Image w="24px" src={Instagram} alt="TV1 - Logo" gridColumn="1" />
          </Link>
          <Link href="https://www.facebook.com/index325/" isExternal>
            <Image w="24px" src={Linkedin} alt="TV1 - Logo" gridColumn="1" />
          </Link>
        </Stack>
        <Stack
          h={["100%", "100%", "100%", "100%", "100vh"]}
          w={["100%", "100%", "750px"]}
          justifyContent="center"
          alignItems="center"
          direction="column"
          pl={["0px", "0px", "0px", "32px"]}
          my={["8", "8", "8", "8", "0"]}
          spacing="8"
        >
          <Heading as="h3" color="white">
            Hello! I'm Gabriel Orlando, a Fullstack Developer from Brazil.
          </Heading>
          <Text fontSize="20px" color="gray.200" w="100%">
            Fullstack developer
          </Text>
          <Text color="gray.400">
            I'm a passionate and creative person who loves to create and build
            things. I'm a self-taught developer and I'm always looking for new
            challenges and opportunities to learn and grow.
          </Text>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="orange"
            size="lg"
            onClick={() => {
              scroller.scrollTo("contact", {
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: -85,
              });
            }}
          >
            Contact me
          </Button>
        </Stack>
        <Flex
          alignItems="flex-end"
          justifySelf="flex-end"
          mb={["8", "8", "8", "8", "0"]}
        >
          <AnimatedContainer>
            <Image
              src="https://icon-library.com/images/icon-programmer/icon-programmer-14.jpg"
              w="300px"
            />
          </AnimatedContainer>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;
