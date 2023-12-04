import React, { useState } from 'react';
import {
  Box, 
  Flex, 
  Avatar, 
  Text, 
  VStack,
  Button 
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProfileComponent = () => {
  const [showButton, setShowButton] = useState(false);

  const user = {
    username: 'JohnDoe',
    fullName: 'John Doe',
    avatarURL: 'https://via.placeholder.com/150', 
  };

  return (
    <Box
      p={4}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      bgColor="white"
      height="130px"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <Flex align="center" justify="space-between">
        <Avatar size="lg" src={user.avatarURL} alt={user.username} />
        <VStack ml={4} align="flex-start">
          <Text fontSize="xl" fontWeight="bold">{user.fullName}</Text>
          <Text color="gray.500">@{user.username}</Text>
          {showButton && (
            <Link to="/profile">           
             <Button colorScheme='blue'>Профиль</Button>
            </Link>
          )}
        </VStack>
      </Flex>
    </Box>
  );
};

export default ProfileComponent;
