import { Button } from "@chakra-ui/button";
import { UseDisclosureProps } from "@chakra-ui/hooks";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import React, { useRef, useState } from "react";

interface Props {
  title: string;
  description: string;
  cancelCallback: () => void;
  confirmationCallback: () => void;
  cancelButtonText?: string;
  confirmationButtonText?: string;
  disclosure: UseDisclosureProps;
}

const DeletionDialog = ({
  title,
  description,
  cancelCallback,
  confirmationCallback,
  cancelButtonText = "Não",
  confirmationButtonText = "Sim",
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
      isOpen={isOpen!}
      leastDestructiveRef={cancelRef}
      onClose={handleCancel}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{description}</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={handleCancel}>
              {cancelButtonText}
            </Button>
            <Button colorScheme="red" onClick={handleConfirmation} ml={3}>
              {confirmationButtonText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DeletionDialog;
