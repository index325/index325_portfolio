import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Flex } from "@chakra-ui/react";

import React from "react";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const MobileMenu = ({ children, isOpen, onOpen, onClose }: Props) => {
  const btnRef = React.useRef(null);
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Flex
              h="100%"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              {children}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Button
        ref={btnRef}
        onClick={onOpen}
        display={["block", "block", "block", "none"]}
      >
        <HamburgerIcon />
      </Button>
    </>
  );
};

export default MobileMenu;
