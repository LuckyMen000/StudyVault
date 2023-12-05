import { 
  Box, 
  Heading, 
  Text, 
  Icon 
} from '@chakra-ui/react';
import { MdErrorOutline } from 'react-icons/md';

const NotFoundPage = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Icon as={MdErrorOutline} w={20} h={20} color="red.500" />
      <Heading mt={4} fontSize="2xl">
        404 - Страница не найдена
      </Heading>
      <Text mt={2} fontSize="lg">
        Извините, запрашиваемая вами страница не найдена.
      </Text>
    </Box>
  );
};

export default NotFoundPage;
