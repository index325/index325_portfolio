import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  text: string;
}

const FooterLinks = ({ to, text }: Props) => {
  return (
    <Link to={to} style={{ display: "inline" }}>
      <Text
        background="linear-gradient(to right, transparent, transparent),
    linear-gradient(to right, white, white)"
        backgroundSize="100% 0.1em, 0 0.1em"
        backgroundPosition="100% 100%, 0 100%"
        backgroundRepeat="no-repeat"
        pb={1}
        transition="background-size 500ms"
        w="100%"
        display="inline"
        _hover={{
          backgroundSize: "0 0.1em, 100% 0.1em",
        }}
      >
        {text}
      </Text>
    </Link>
  );
};

export default FooterLinks;
