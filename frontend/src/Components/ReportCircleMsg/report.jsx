import React, { useState } from 'react';
import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

function ComplaintButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<QuestionIcon />}
        bg="red.500"
        color="white"
        borderRadius="full"
        boxSize="40px"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Оставить жалобу</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={4}>
              <p>Опишите вашу жалобу:</p>
            </Box>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ComplaintButton;
