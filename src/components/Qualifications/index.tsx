import Timeline from "./Timeline";
import { Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { useState } from "react";
import AnimatedContainer from "@Components/shared/AnimatedContainer";

const Qualifications = () => {
  const themeColor = useColorMode();
  const [qualification, setQualification] = useState("education");

  const handleQualificationClick = (qualificationIndex: string) => {
    setQualification(qualificationIndex);
  };

  return (
    <Flex w="100%" direction="column" margin="auto">
      <AnimatedContainer appearFrom="top">
        <>
          <Heading textAlign="center" as="h1" w="100%">
            Qualifications
          </Heading>
          <Text textAlign="center" color="gray.500" w="100%">
            My personal qualifications
          </Text>
        </>
      </AnimatedContainer>

      <Flex direction="row" justifyContent="center" mt="6">
        <AnimatedContainer appearFrom="left">
          <Heading
            mr="6"
            onClick={() => handleQualificationClick("education")}
            rounded="lg"
            _hover={{ backgroundColor: "blue.200" }}
            p="3"
            cursor="pointer"
            w="150px"
            borderBottom={
              qualification === "education"
                ? `2px solid ${
                    themeColor.colorMode === "light" ? "#1A202C" : "white"
                  }`
                : "none"
            }
          >
            <Text
              as="span"
              fontWeight="bold"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize="lg"
            >
              <FaGraduationCap size="24" style={{ marginRight: "16px" }} />
              Education
            </Text>
          </Heading>
        </AnimatedContainer>

        <AnimatedContainer appearFrom="right">
          <Heading
            ml="6"
            onClick={() => handleQualificationClick("work")}
            rounded="lg"
            _hover={{ backgroundColor: "blue.200" }}
            p="3"
            cursor="pointer"
            w="150px"
            borderBottom={
              qualification === "work"
                ? `2px solid ${
                    themeColor.colorMode === "light" ? "#1A202C" : "white"
                  }`
                : "none"
            }
          >
            <Text
              as="span"
              fontWeight="bold"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize="lg"
            >
              <FaBriefcase size="24" style={{ marginRight: "16px" }} />
              Work
            </Text>
          </Heading>
        </AnimatedContainer>
      </Flex>

      {qualification === "work" && (
        <Timeline
          data={[
            {
              title: "Monitora",
              subtitle: "Fullstack developer",
              time: { start: 2021, end: "current" },
            },
            {
              title: "Cast Group",
              subtitle: "Web Developer",
              time: { start: 2020, end: 2021 },
            },
            {
              title: "DXC",
              subtitle: "Internship",
              time: { start: 2019, end: 2020 },
            },
            {
              title: "WAB - Digital Agency",
              subtitle: "Web Developer",
              time: { start: 2017, end: 2019 },
            },
            {
              title: "WAB - Digital Agency",
              subtitle: "Internship",
              time: { start: 2017, end: 2017 },
            },
            {
              title: "FI Sistemas",
              subtitle: "Internship",
              time: { start: 2016, end: 2017 },
            },
          ]}
        />
      )}

      {qualification === "education" && (
        <Timeline
          data={[
            {
              title: "Rocketseat",
              subtitle: "Flutter Trail",
              time: { start: 2020, end: 2021 },
            },
            {
              title: "Rocketseat",
              subtitle: "React & Node Trail",
              time: { start: 2020, end: 2020 },
            },
            {
              title: "UNIP",
              subtitle: "Computer Science",
              time: { start: 2016, end: 2020 },
            },
            {
              title: "ETEC",
              subtitle: "IT for desktop",
              time: { start: 2014, end: 2015 },
            },
            {
              title: "ETEC",
              subtitle: "IT for internet",
              time: { start: 2013, end: 2014 },
            },
          ]}
        />
      )}
    </Flex>
  );
};

export default Qualifications;
