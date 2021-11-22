import { Flex } from "@chakra-ui/react";
import Banner from "@Components/Banner";
import Footer from "@Components/Footer";
import Header from "@Components/Header";
import ContentContainer from "@Components/ContentContainer";

interface Props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return (
    <Flex direction="column">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};

export default MainContainer;
