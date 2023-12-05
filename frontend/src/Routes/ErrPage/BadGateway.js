import React from 'react';
import { 
    Box, 
    Heading, 
    Text 
} from '@chakra-ui/react';

const BadGatewayPage = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Heading as="h1" size="xl" mb={4}>
        Error 502 - Bad Gateway
      </Heading>
      <Text fontSize="lg">
        Sorry, there was an issue with the server. Please try again later.
      </Text>
    </Box>
  );
};

export default BadGatewayPage;
