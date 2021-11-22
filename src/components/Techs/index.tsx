import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  List,
  ListItem,
  Image,
} from "@chakra-ui/react";

const Techs = () => {
  return (
    <Flex w="100%" bgColor="gray.300">
      <Grid templateColumns={["1fr", "1fr 1fr"]} w="100%">
        <GridItem w="100%" h="100%" bg="gray.300">
          <Flex justifyContent="center" alignItems="center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/178/178389.png"
              w={["100px", "250px", "450px"]}
              p="10px"
            />
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100%" bg="gray.300">
          <Flex direction="column" h="100%">
            <Heading as="h3" size="md" textAlign="center">
              Techs
            </Heading>
            <List h="100%">
              <ListItem h="100%">
                <Flex justifyContent="space-around" h="100%" direction="column">
                  <Text>React</Text>
                  <Text>React</Text>
                  <Text>React</Text>
                  <Text>React</Text>
                </Flex>
              </ListItem>
            </List>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Techs;
