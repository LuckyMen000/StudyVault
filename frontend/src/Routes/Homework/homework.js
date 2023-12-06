import React from 'react';
import {
 ChakraProvider, 
 Box, 
 Container, 
 Heading, 
 Button 
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';

const HomeworkPage = () => {
  const homeworkData = [
    { id: 1, title: 'Домашнее задание 1' },
    { id: 2, title: 'Домашнее задание 2' },
    { id: 3, title: 'Домашнее задание 3' },
    // Добавьте другие задания по мере необходимости
  ];

  const handleViewClick = (id) => {
    // Логика обработки нажатия кнопки "Посмотреть", если требуется
    console.log(`Clicked to view homework with ID: ${id}`);
  };

  return (
    <ChakraProvider>
      <Box textAlign="center" mt="4">
        <Heading as="h1" mb="4">Домашние задания</Heading>
        <Container maxW="xl">
          {homeworkData.map((homework) => (
            <Box
              key={homework.id}
              borderWidth="1px"
              borderRadius="lg"
              p="4"
              mb="4"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Heading as="h3" size="md" mb="2">
                {homework.title}
              </Heading>
              <Button
                rightIcon={<ViewIcon />}
                colorScheme="blue"
                variant="outline"
                onClick={() => handleViewClick(homework.id)}
              >
                Посмотреть
              </Button>
            </Box>
          ))}
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default HomeworkPage;
