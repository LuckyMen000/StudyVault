import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Flex,
  IconButton,
  Tooltip,
  Badge,
} from '@chakra-ui/react';
import { ViewIcon, CheckIcon, EditIcon } from '@chakra-ui/icons';
import '../DocumentsPage/documents';

const HomeWorkPage = () => {
  const [homeworks, setHomeworks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHomework, setSelectedHomework] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [viewMode, setViewMode] = useState(false);

  const handleOpenModal = (homework, isViewMode = false) => {
    setSelectedHomework(homework);
    setTitle(homework ? homework.title : '');
    setDescription(homework ? homework.description : '');
    setViewMode(isViewMode);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedHomework(null);
    setTitle('');
    setDescription('');
    setViewMode(false);
    setIsOpen(false);
  };

  const handleSaveHomework = () => {
    if (selectedHomework && !viewMode) {
      const updatedHomeworks = homeworks.map((homework) =>
        homework === selectedHomework
          ? { ...homework, title, description }
          : homework
      );
      setHomeworks(updatedHomeworks);
    } else if (!viewMode) {
      setHomeworks([...homeworks, { title, description }]);
    }

    handleCloseModal();
  };

  const handleDeleteHomework = (homework) => {
    if (!viewMode && window.confirm("Вы уверены, что хотите удалить это домашнее задание?")) {
      const updatedHomeworks = homeworks.filter((item) => item !== homework);
      setHomeworks(updatedHomeworks);
    }
  };

  return (
    <ChakraProvider>
      <Container maxW="container.md" mt={10}>
        <Heading mb={4}>Домашние Задания</Heading>
        <Button
          onClick={() => handleOpenModal(null)}
          colorScheme="teal"
        >
          Добавить ДЗ
        </Button>

        <Stack mt={4}>
          {homeworks.map((homework) => (
            <Box
              key={homework.title}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              _hover={{ bg: 'transparent' }}
            >
              <Flex justify="space-between" align="center">
                <Badge colorScheme="teal">{homework.title}</Badge>
                <Stack direction="row">
                  <Tooltip label="Посмотреть">
                    <IconButton
                      icon={<ViewIcon />}
                      onClick={() => handleOpenModal(homework, true)}
                      bg="transparent"
                    />
                  </Tooltip>
                  <Tooltip label="Изменить">
                    <IconButton
                      icon={<EditIcon />}
                      onClick={() => handleOpenModal(homework)}
                      bg="transparent"
                    />
                  </Tooltip>
                  <Tooltip label="Удалить">
                    <IconButton
                      icon={<CheckIcon />}
                      onClick={() => handleDeleteHomework(homework)}
                      bg="transparent"
                    />
                  </Tooltip>
                </Stack>
              </Flex>
            </Box>
          ))}
        </Stack>

        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {viewMode ? 'Просмотр ДЗ' : selectedHomework ? 'Редактировать ДЗ' : 'Добавить ДЗ'}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Заголовок</FormLabel>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  isReadOnly={viewMode}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Описание</FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  isReadOnly={viewMode}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              {!viewMode && (
                <Button colorScheme="teal" mr={3} onClick={handleSaveHomework}>
                  Сохранить
                </Button>
              )}
              <Button onClick={handleCloseModal}>Отмена</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </ChakraProvider>
  );
};

export default HomeWorkPage;
