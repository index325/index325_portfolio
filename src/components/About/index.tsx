import { DownloadIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";
import CV from "../../assets/CV.pdf";

const About = () => {
  return (
    <Flex w="100%" direction="column">
      <Heading textAlign="center" as="h1" w="100%">
        About
      </Heading>
      <Text textAlign="center" color="gray.500" w="100%">
        My introduction
      </Text>
      <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap={4} mt="4">
        <GridItem w="100%" h="100%">
          <Flex
            h="100%"
            alignItems="center"
            w="100%"
            justifyContent={["center", "center", "center", "flex-start"]}
          >
            <Image
              w="450px"
              rounded="lg"
              src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            />
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100%">
          <Flex h="100%" direction="column" alignItems="center">
            <Text color="gray.600">
              Highly commited to my work and always ready to learn new things. I
              am a developer with extensive knowledge of frontend and backend
              technologies, always looking for new challenges and delivering
              quality work.
            </Text>
            <Flex justifyContent="center" mt={4}>
              <Stack
                direction={["column", "column", "row"]}
                alignItems="center"
                spacing={16}
              >
                <Stack direction="column">
                  <Heading as="h3" size="md" textAlign="center">
                    +6
                    <br />
                    <Text fontSize="sm">Of experience</Text>
                  </Heading>
                </Stack>
                <Stack direction="column">
                  <Heading as="h3" size="md" textAlign="center">
                    +8
                    <br />
                    <Text fontSize="sm">Completed projects</Text>
                  </Heading>
                </Stack>
                <Stack direction="column">
                  <Heading as="h3" size="md" textAlign="center">
                    +6
                    <br />
                    <Text fontSize="sm">Companies worked</Text>
                  </Heading>
                </Stack>
              </Stack>
            </Flex>
            <a href={CV} download>
              <Button
                mt="6"
                py="4"
                rightIcon={<DownloadIcon />}
                colorScheme="orange"
                size="lg"
                w="200px"
              >
                Download CV
              </Button>
            </a>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default About;
