import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Flex,
  Text,
  useDisclosure,
  List,
  ListItem,
} from "@chakra-ui/react";
import CustomModal from "@Components/shared/Modal";

interface Props {
  title: any;
  icon: any;
  services: string[];
}

const Service = ({ title, icon, services }: Props) => {
  const serviceDisclosure = useDisclosure();

  return (
    <Box
      height="450px"
      width="350px"
      rounded="lg"
      p="6"
      boxShadow="0px 0px 9px 4px rgba(0,0,0,0.39);"
      m="4"
    >
      <Flex minHeight="350" justifyContent="flex-end" direction="column">
        {icon}
        <Heading>{title}</Heading>

        <Text
          color="orange.400"
          cursor="pointer"
          display="flex"
          alignItems="center"
          mt="2"
          onClick={() => serviceDisclosure.onOpen()}
        >
          View more <ArrowRightIcon ml="4" />
        </Text>
      </Flex>
      <CustomModal
        title={title}
        isOpen={serviceDisclosure.isOpen}
        onClose={serviceDisclosure.onClose}
      >
        <List>
          {services.map((service: string, index) => {
            return (
              <ListItem display="flex" alignItems="center" my="4" key={index}>
                <Box
                  h="12px"
                  w="12px"
                  rounded="lg"
                  bgColor="orange.400"
                  mr="4"
                />
                {service}
              </ListItem>
            );
          })}
        </List>
      </CustomModal>
    </Box>
  );
};

export default Service;
