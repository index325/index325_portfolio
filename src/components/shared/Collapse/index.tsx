import { Collapse } from "@chakra-ui/transition";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
}

const CustomCollapse = ({ children, isOpen }: Props) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      {children}
    </Collapse>
  );
};

export default CustomCollapse;
