// slidebar.js
import React from 'react';
import { Box, VStack, Icon, Text } from '@chakra-ui/react';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './slidebar.css';



const Sidebar = () => {
  return (
    <VStack className="sidebar-container" spacing={4} align="center" background="WhiteAlpha 800">
      <Box>
        <Icon as={FaHome} boxSize={6} />
        <Text>Home</Text>
      </Box>
      <Box>
        <Icon as={FaUser} boxSize={6} />
        <Text>Profile</Text>
      </Box>
      <Box className="logout-settings">
        <Icon as={FaCog} boxSize={6} />
        <button>Settings</button>
      </Box>
      <Box className="logout-settings">
        <Icon as={FaSignOutAlt} boxSize={6} />
        <button>Logout</button>
      </Box>
    </VStack>
  );
};

export default Sidebar;
