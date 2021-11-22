import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text, Progress } from "@chakra-ui/react";
import CustomCollapse from "@Components/shared/Collapse";
import { useState } from "react";

interface Props {
  title: string;
  icon: any;
  subtitle?: string;
  items: { label: string; percentage: number }[];
}

const SkillsItem = ({ title, icon, subtitle, items }: Props) => {
  const [skillIsOpen, setSkillIsOpen] = useState(false);

  const handleSkillOpen = () => {
    setSkillIsOpen(!skillIsOpen);
  };

  return (
    <Box px="4" py="6" className="noselect">
      <Flex
        direction="row"
        w="100%"
        onClick={() => handleSkillOpen()}
        cursor="pointer"
      >
        {icon}
        <Flex direction="column" justifyContent="center" w="100%" ml="4">
          <Heading as="h3" fontSize="lg" mb="2">
            {title}
          </Heading>
          {subtitle && <Text fontSize="md">{subtitle}</Text>}
        </Flex>
        <Flex h="100%" m="auto" ml="4">
          {skillIsOpen ? (
            <ChevronDownIcon w={8} h={8} />
          ) : (
            <ChevronUpIcon w={8} h={8} />
          )}
        </Flex>
      </Flex>
      <CustomCollapse isOpen={skillIsOpen}>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          w="100%"
        >
          {items.map((item, index) => (
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="space-around"
              mb="4"
              w="100%"
              key={index}
            >
              <Flex justifyContent="space-between">
                <Text fontSize="md">{item.label}</Text>
                <Text fontSize="md">{item.percentage}%</Text>
              </Flex>
              <Flex w="100%" direction="column">
                <Progress hasStripe value={item.percentage} />
              </Flex>
            </Flex>
          ))}
        </Flex>
      </CustomCollapse>
    </Box>
  );
};

export default SkillsItem;
