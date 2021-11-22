import {
  Flex,
  Grid,
  Heading,
  Stack,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "@Components/ColorModeSwitcher";

import { useState } from "react";
import MenuLink from "./MenuLink";
import MobileMenu from "./MobileMenu";
import MobileMenuLinks from "./MobileMenuLinks";

const Header = () => {
  const [navBarActive, setNavBarActive] = useState(false);

  const handleNavBarColor = () => {
    if (window.scrollY >= 80) {
      setNavBarActive(true);
    } else {
      setNavBarActive(false);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  window.addEventListener("scroll", handleNavBarColor);

  return (
    <Flex
      bg={navBarActive ? "orange.400" : "rgba(255, 255, 255, 0.5)"}
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "70px"]}
      align="center"
      justify="center"
      position="fixed"
      zIndex="1"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1500px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Heading>INDEX325</Heading>
        <GridItem colSpan={2}>
          <Flex gridColumn="3" justifyContent="flex-end" alignItems="center">
            <Stack
              display={["none", "none", "none", "flex"]}
              direction="row"
              spacing="2rem"
            >
              <MenuLink to="about" text="About me" />
              <MenuLink to="skills" text="Skills" />
              <MenuLink to="qualifications" text="Qualifications" />
              <MenuLink to="services" text="Services" />
              <MenuLink to="contact" text="Contact" />
            </Stack>
            <MobileMenu isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
              <MobileMenuLinks
                links={[
                  { to: "about", text: "About me" },
                  { to: "skills", text: "Skills" },
                  { to: "qualifications", text: "Qualifications" },
                  { to: "services", text: "Services" },
                  { to: "contact", text: "Contact" },
                ]}
                closeDrawer={onClose}
              />
            </MobileMenu>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Header;
