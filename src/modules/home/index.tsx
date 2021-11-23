import { Flex } from "@chakra-ui/react";
import About from "@Components/About";
import ContentContainer from "@Components/ContentContainer";
import Skills from "@Components/Skills";
import Qualifications from "@Components/Qualifications";
import Services from "@Components/Services";
import CustomDivider from "@Components/Divider";
import Banner from "@Components/Banner";
import Contact from "@Components/Contact";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <Flex direction="column">
      <Banner />

      <CustomDivider />

      <ContentContainer>
        <Element name="about">
          <About />
        </Element>
      </ContentContainer>

      <CustomDivider />

      <ContentContainer>
        <Element name="skills">
          <Skills />
        </Element>
      </ContentContainer>

      <CustomDivider />

      <ContentContainer>
        <Element name="qualifications">
          <Qualifications />
        </Element>
      </ContentContainer>

      <CustomDivider />

      <ContentContainer>
        <Element name="services">
          <Services />
        </Element>
      </ContentContainer>

      <CustomDivider />

      <ContentContainer>
        <Element name="contact">
          <Contact />
        </Element>
      </ContentContainer>
    </Flex>
  );
};

export default Home;
