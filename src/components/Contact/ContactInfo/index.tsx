import { Flex, Heading, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  description: any;
  icon: any;
}

const ContactInfo = ({ title, description, icon }: Props) => {
  return (
    <Flex direction="row" alignItems="center">
      {icon}
      <Flex direction="column" ml="4">
        <Heading as="h3" fontSize="lg" mb="2">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Flex>
    </Flex>
  );
};

export default ContactInfo;
