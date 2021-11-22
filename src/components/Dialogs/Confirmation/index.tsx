import { Button } from "@chakra-ui/button";
import { UseDisclosureProps } from "@chakra-ui/hooks";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { useRef } from "react";

interface Props {
  title: string;
  description: string;
  cancelCallback: () => void;
  confirmationCallback: () => void;
  cancelButtonText?: string;
  confirmationButtonText?: string;
  disclosure: UseDisclosureProps;
}

const ConfirmationDialog = ({
  title,
  description,
  cancelCallback,
  confirmationCallback,
  cancelButtonText = "Cancelar",
  confirmationButtonText = "Confirmar",
  disclosure,
}: Props) => {
  const { isOpen, onClose } = disclosure;
  const cancelRef = useRef(null);

  const handleConfirmation = () => {
    if (confirmationCallback) {
      confirmationCallback();
    }
    onClose!();
  };

  const handleCancel = () => {
    if (cancelCallback) {
      cancelCallback();
    }
    onClose!();
  };

  return (
    <AlertDialog
      motionPreset="scale"
      leastDestructiveRef={cancelRef}
      onClose={handleCancel}
      isOpen={isOpen!}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{description}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={handleCancel}>
            {cancelButtonText}
          </Button>
          <Button colorScheme="red" ml={3} onClick={handleConfirmation}>
            {confirmationButtonText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationDialog;
