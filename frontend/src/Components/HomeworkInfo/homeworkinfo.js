import React from 'react';
import { 
  Box, 
  Button, 
  Center,
  Heading 
} from '@chakra-ui/react';
import Rectangle from './homework.jpg';

const HomeWorkComponentInfo = () => {
  return (
    <Box
      bgImage={`url(${Rectangle})`}
      bgSize="cover"
      bgPosition="center"
      height="300px"
      width="500px"
      borderRadius="15%"
      color="white"
      textAlign="center"
      position="relative"
    >
      <Center h="100%">
        <Box>
          <Heading size="xl" mb="4">
            Тут реально вся домашка
          </Heading>
          <Button mr="2" colorScheme='blue'>Изучить</Button>
          <Button variant='outline' colorScheme='blue'>Опубликовать</Button>
        </Box>
      </Center>
    </Box>
  );
};

export default HomeWorkComponentInfo;
