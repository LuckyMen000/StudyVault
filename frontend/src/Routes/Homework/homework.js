import React from 'react';
import {
 ChakraProvider, 
 Box, 
 Container, 
 Heading, 
 Button 
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { IoDocumentAttach, IoDocument } from "react-icons/io5";
import { Link } from 'react-router-dom';

const HomeworkPage = () => {
  const homeworkData = [
    { id: 1, title: 'Домашнее задание 1' },
    { id: 2, title: 'Домашнее задание 2' },
    { id: 3, title: 'Домашнее задание 3' },
  ];

  const handleViewClick = (id) => {
    console.log(`Clicked to view homework with ID: ${id}`);
  };

  return (
    <ChakraProvider>
      <Box display="flex" flexDirection="column" alignItems="flex-end" paddingTop="7px" paddingRight="7px">
        <Link to="/homework/documents">
          <Button
            textAlign="right"
            leftIcon={<IoDocumentAttach />}
            colorScheme="blue"
            variant="outline"
            mb="2"
          >
            Документы 
          </Button>
        </Link>

        <Link to="/homework/add">
          <Button
            textAlign="right"
            leftIcon={<IoDocument />}
            colorScheme="blue"
            variant="outline"
          >
            Создать ДЗ
          </Button>
        </Link>
      </Box>

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
