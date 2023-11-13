// slidebar.js
import React from 'react';
import { Box, VStack, Icon, Text } from '@chakra-ui/react';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <VStack spacing={4} align="left">
      <Box>
        <Icon as={FaHome} boxSize={6} />
        <Text>Home</Text>
      </Box>
      <Box>
        <Icon as={FaUser} boxSize={6} />
        <Text>Profile</Text>
      </Box>
      <Box>
        <Icon as={FaCog} boxSize={6} />
        <Text>Settings</Text>
      </Box>
      <Box>
        <Icon as={FaSignOutAlt} boxSize={6} />
        <Text>Logout</Text>
      </Box>
    </VStack>
  );
};

export default Sidebar;
