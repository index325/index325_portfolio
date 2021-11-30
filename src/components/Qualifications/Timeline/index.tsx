import { Flex, Heading, Text } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import DividerWithDot from "./DividerWithDot";
import AnimatedContainer from "@Components/shared/AnimatedContainer";

interface Props {
  data: DataProps[];
}

interface DataProps {
  title: string;
  subtitle: string;
  time: Time;
}

interface Time {
  start: number;
  end: number | "current";
}

const Timeline = ({ data }: Props) => {
  return (
    <Flex direction="column" my="8">
      {data.map((item, index) => {
        return (
          <Flex justifyContent="center" direction="row" key={index}>
            <Flex direction="row">
              {(index + 1) % 2 === 0 && (
                <>
                  <AnimatedContainer appearFrom="left">
                    <Flex key={index} direction="column" w="120px">
                      <Heading as="h3" size="sm">
                        {item.title}
                      </Heading>
                      <Text>{item.subtitle}</Text>
                      <Text>
                        <CalendarIcon mr="2" />
                        {item.time.start} - {item.time.end}
                      </Text>
                    </Flex>
                  </AnimatedContainer>

                  <DividerWithDot color="gray.300" size={12} />
                  <Flex w="120px"></Flex>
                </>
              )}

              {(index + 1) % 2 !== 0 && (
                <>
                  <Flex w="120px"></Flex>
                  <DividerWithDot color="gray.300" size={12} />
                  <AnimatedContainer appearFrom="right">
                    <Flex key={index} direction="column" w="120px">
                      <Heading as="h3" size="sm">
                        {item.title}
                      </Heading>
                      <Text>{item.subtitle}</Text>
                      <Text>
                        <CalendarIcon mr="2" />
                        {item.time.start} -{" "}
                        <Text textTransform="uppercase">{item.time.end}</Text>
                      </Text>
                    </Flex>
                  </AnimatedContainer>
                </>
              )}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Timeline;
