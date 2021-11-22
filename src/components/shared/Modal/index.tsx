import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  finalFocusRef?: React.RefObject<any>;
  initialFocusRef?: React.RefObject<any>;
  callbackOnClose?: () => void;
}

const CustomModal = ({
  children,
  isOpen,
  onClose,
  title,
  finalFocusRef,
  initialFocusRef,
  callbackOnClose,
}: Props) => {
  const handleClose = () => {
    if (callbackOnClose) {
      callbackOnClose();
    }

    onClose();
  };

  return (
    <Modal
      finalFocusRef={finalFocusRef}
      initialFocusRef={initialFocusRef}
      isOpen={isOpen}
      onClose={handleClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
