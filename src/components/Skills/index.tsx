import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import SkillsItem from "./SkillsItem";
import { BsBraces } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { FaMobileAlt, FaServer } from "react-icons/fa";
const Skills = () => {
  return (
    <Flex w="100%" mt="6" direction="column" margin="auto">
      <Heading textAlign="center" as="h1" w="100%">
        Skills
      </Heading>
      <Text textAlign="center" color="gray.500" w="100%">
        My technical skills
      </Text>
      <Grid
        w="100%"
        templateColumns={["1fr", "1fr", "1fr 1fr"]}
        gap={6}
        alignItems="flex-start"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        <SkillsItem
          title="Frontend Developer"
          subtitle="More than 2 years"
          icon={<BsBraces size="36" />}
          items={[
            { label: "React", percentage: 80 },
            { label: "Vue", percentage: 50 },
            { label: "Angular", percentage: 50 },
            { label: "HTML", percentage: 80 },
            { label: "CSS", percentage: 80 },
            { label: "JavaScript", percentage: 80 },
            { label: "TypeScript", percentage: 80 },
            { label: "Styled Components", percentage: 70 },
            { label: "Redux", percentage: 70 },
          ]}
        />
        <SkillsItem
          title="Backend Developer"
          subtitle="More than 2 years"
          icon={<FaServer size="36" />}
          items={[
            { label: "NodeJS", percentage: 80 },
            { label: "Express", percentage: 80 },
            { label: "TypeORM", percentage: 70 },
            { label: "MongoDB", percentage: 50 },
            { label: "Firebase", percentage: 30 },
            { label: "GraphQL", percentage: 30 },
            { label: "Apollo", percentage: 30 },
            { label: "Java", percentage: 60 },
            { label: "Spring", percentage: 50 },
            { label: "PHP", percentage: 50 },
            { label: "Symfony", percentage: 70 },
          ]}
        />
        <SkillsItem
          title="Mobile Developer"
          subtitle="More than 2 years"
          icon={<FaMobileAlt size="36" />}
          items={[
            { label: "Cordova", percentage: 50 },
            { label: "Flutter", percentage: 70 },
            { label: "React Native", percentage: 70 },
            { label: "Ionic", percentage: 50 },
          ]}
        />
        <SkillsItem
          title="Soft Skills"
          subtitle="More than 2 years"
          icon={<GiSkills size="36" />}
          items={[
            { label: "Commitment", percentage: 100 },
            { label: "Help people", percentage: 100 },
            { label: "Comunication", percentage: 90 },
            { label: "Teamwork", percentage: 100 },
            { label: "Leadership", percentage: 60 },
            { label: "Problem Solving", percentage: 80 },
            { label: "Adaptability", percentage: 90 },
            { label: "Time Management", percentage: 70 },
            { label: "Creativity", percentage: 70 },
            { label: "Initiative", percentage: 100 },
          ]}
        />
      </Grid>
    </Flex>
  );
};

export default Skills;
