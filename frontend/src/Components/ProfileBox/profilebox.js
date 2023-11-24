import React from 'react';
import { Box, Flex, Avatar, Text, VStack } from '@chakra-ui/react';

const ProfileComponent = () => {
  const user = {
    username: 'JohnDoe',
    fullName: 'John Doe',
    avatarURL: 'https://via.placeholder.com/150', 
    bio: 'Frontend Developer', 
  };

  return (
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" bgColor="white" height="130px">
      <Flex align="center" justify="space-between">
        <Avatar size="lg" src={user.avatarURL} alt={user.username} />
        <VStack ml={4} align="flex-start">
          <Text fontSize="xl" fontWeight="bold">{user.fullName}</Text>
          <Text color="gray.500">@{user.username}</Text>
          <Text color="gray.600">{user.bio}</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ProfileComponent;
