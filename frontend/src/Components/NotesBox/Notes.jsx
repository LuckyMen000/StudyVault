import React from 'react';
import {
  Box,
  Textarea,
  VStack,
  Text,
  Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const NoteComponent = () => {
  return (
    <Box
      p={4}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      bgColor="white"
      width="300px"
      height="240px"
    >
      <Text fontSize="xl" fontWeight="bold">Заметки</Text>
      <VStack mt={3} spacing={4}>
        <Textarea
          placeholder="Введите заметку..."
          size="md"
          minHeight="100px"
          borderWidth="1px"
          borderRadius="md"
          resize="vertical"
        />
      </VStack>
      <Box mt="21px" p="2px">
        <Button colorScheme="blue" mr="8px">Сохранить</Button>
        <Link to="/notes">
            <Button colorScheme="blue">Все заметки</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NoteComponent;
