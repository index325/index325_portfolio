import { Flex, Heading, Text } from "@chakra-ui/react";
import AnimatedContainer from "@Components/shared/AnimatedContainer";
import { BsCode } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { GoServer } from "react-icons/go";

import Service from "./Service";

const Services = () => {
  return (
    <Flex w="100%" direction="column">
      <AnimatedContainer appearFrom="top">
        <Heading textAlign="center" as="h1" w="100%">
          Services
        </Heading>
        <Text textAlign="center" color="gray.500" w="100%">
          My services
        </Text>
      </AnimatedContainer>

      <Flex justifyContent="center" mt="6" flexWrap="wrap">
        <AnimatedContainer appearFrom="bottom">
          <Service
            title={
              <>
                Frontend <br /> Services
              </>
            }
            icon={<BsCode size="40" />}
            services={[
              "I develop the user interface",
              "Web page development",
              "Web page design",
              "Integrations with APIs",
              "Responsive web design",
              "Web page maintenance",
              "Development from scratch",
            ]}
          />
        </AnimatedContainer>

        <AnimatedContainer appearFrom="bottom">
          <Service
            title={
              <>
                Backend <br /> Services
              </>
            }
            icon={<GoServer size="40" />}
            services={[
              "Creation of APIs",
              "Integration with other services",
              "Maintenance",
              "Creation of architecture",
              "Development from scratch",
              "Unit tests",
            ]}
          />
        </AnimatedContainer>

        <AnimatedContainer appearFrom="bottom">
          <Service
            title={
              <>
                Mobile <br /> Services
              </>
            }
            icon={<FaMobileAlt size="40" />}
            services={[
              "Development of user interface",
              "Development from scratch",
              "Maintenance",
              "Publish on stores",
              "CI/CD using Microsoft codepush",
            ]}
          />
        </AnimatedContainer>
      </Flex>
    </Flex>
  );
};

export default Services;
