import { Flex } from "@chakra-ui/react";
import Footer from "@Components/Footer";
import Header from "@Components/Header";

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
