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
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { ViewIcon, CheckIcon, EditIcon } from '@chakra-ui/icons';

const HomeWorkPage = () => {
  const { colorMode } = useColorMode();

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
    const currentDate = new Date().toLocaleDateString();
    if (selectedHomework && !viewMode) {
      const updatedHomeworks = homeworks.map((homework) =>
        homework === selectedHomework
          ? { ...homework, title, description }
          : homework
      );
      setHomeworks(updatedHomeworks);
    } else if (!viewMode) {
      setHomeworks([...homeworks, { title, description, date: currentDate }]);
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
        <Heading mb={4} color="teal.500">
          📘 Домашние Задания
        </Heading>
        <Button
          onClick={() => handleOpenModal(null)}
          colorScheme="teal"
          bg={colorMode === 'light' ? 'gray.500' : 'teal.500'}
          _hover={{ bg: colorMode === 'light' ? 'gray.400' : 'teal.400' }}
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
              bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
              boxShadow="md"
              mb="4"
            >
              <Flex justify="space-between" align="center">
                <Badge colorScheme="teal" bg="teal.300" color="white">
                  {homework.title}
                </Badge>
                <Stack direction="row">
                  <Tooltip label="Посмотреть">
                    <IconButton
                      icon={<ViewIcon />}
                      onClick={() => handleOpenModal(homework, true)}
                      bg="transparent"
                      _hover={{ bg: colorMode === 'light' ? 'gray.200' : 'gray.600' }}
                    />
                  </Tooltip>
                  <Tooltip label="Изменить">
                    <IconButton
                      icon={<EditIcon />}
                      onClick={() => handleOpenModal(homework)}
                      bg="transparent"
                      _hover={{ bg: colorMode === 'light' ? 'gray.200' : 'gray.600' }}
                    />
                  </Tooltip>
                  <Tooltip label="Удалить">
                    <IconButton
                      icon={<CheckIcon />}
                      onClick={() => handleDeleteHomework(homework)}
                      bg="transparent"
                      _hover={{ bg: colorMode === 'light' ? 'gray.200' : 'gray.600' }}
                    />
                  </Tooltip>
                </Stack>
              </Flex>
              <Text mt={2} fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                Добавлено: {homework.date}
              </Text>
            </Box>
          ))}
        </Stack>

        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="teal.500">
              {viewMode ? '👁‍🗨 Просмотр ДЗ' : selectedHomework ? '✏️ Редактировать ДЗ' : '➕ Добавить ДЗ'}
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
