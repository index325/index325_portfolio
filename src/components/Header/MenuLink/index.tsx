import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

interface Props {
  to: string;
  text: string;
  closeDrawer?: () => void;
}

const MenuLink = ({ to, text, closeDrawer, ...rest }: Props) => {
  const handleScrollTo = (to: string) => {
    if (closeDrawer) {
      closeDrawer();
    }
    scroller.scrollTo(to, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -85,
    });
  };

  return (
    <Text onClick={() => handleScrollTo(to)} cursor="pointer">
      <Text
        background="linear-gradient(to right, transparent, transparent),
      linear-gradient(to right, #404245, #000)"
        backgroundSize="100% 0.1em, 0 0.1em"
        backgroundPosition="100% 100%, 0 100%"
        backgroundRepeat="no-repeat"
        transition="background-size 500ms"
        _hover={{
          backgroundSize: "0 0.1em, 100% 0.1em",
        }}
      >
        {text}
      </Text>
    </Text>
  );
};

export default MenuLink;
