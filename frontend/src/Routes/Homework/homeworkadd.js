import React from 'react';
import { Box, Input, Button, Heading, ChakraProvider } from '@chakra-ui/react';

const HomeworkAdd = () => {
  const handlePublish = () => {
    
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <Heading as="h1" mb={4}>
        Создать домашнее задание
      </Heading>
      <Input placeholder="Введите задание..." mb={4} />
      <Button colorScheme="blue" onClick={handlePublish}>
        Опубликовать
      </Button>
    </Box>
  );
};

const HomeworkAddPage = () => {
  return (
    <ChakraProvider>
      <HomeworkAdd />
    </ChakraProvider>
  );
};

export default HomeworkAddPage;
