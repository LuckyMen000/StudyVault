import React from 'react';
import { Box, Button, Center, Heading } from '@chakra-ui/react';

const BackgroundImageWithText = () => {
  return (
    <Box
      bgImage="url('./assets/img/Rectangle 159.jpg')"
      bgSize="cover"
      bgPosition="center"
      height="300px" // Высота блока может быть изменена по вашему усмотрению
      color="white"
      textAlign="center"
      position="relative"
    >
      <Center h="100%">
        <Box>
          <Heading size="xl" mb="4">
            Тут реально вся домашка
          </Heading>
          <Button mr="2">Кнопка 1</Button>
          <Button>Кнопка 2</Button>
        </Box>
      </Center>
    </Box>
  );
};

export default BackgroundImageWithText;
