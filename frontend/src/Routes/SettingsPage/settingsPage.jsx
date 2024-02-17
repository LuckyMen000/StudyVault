import React from 'react';
import {
  Box,
  Heading,
  Divider,
  VStack,
  ChakraProvider,
  Flex,
  Switch,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import { css } from '@emotion/react';
import Sidebar from '../../Components/Slidebar/slidebar.jsx';
import ThemeToggle from '../../AppTheme.js';

const customStyles = css`
  font-weight: bold;
  color: blue;
`;

const SettingsPage = () => {
  return (
    <ChakraProvider>
      <div style={{ display: 'flex', margin: '20px' }}>
        <Sidebar />
        <Box p={4}>
          <Heading as="h1" mb={4} fontSize="2xl">
            <SettingsIcon mr={2} />
            Настройки
          </Heading>
          <Divider mb={4} />
          <VStack spacing={4} align="flex-start">
            <Flex alignItems="center" mb={4}>
              <SettingsItem label="Темная тема" />
              <ThemeToggle />
            </Flex>
            <Flex alignItems="center" mb={4}>
              <SettingsItem label="Уведомления" />
              <Switch
                ml="auto"
                onChange={(e) =>
                  console.log(`Уведомления изменены на ${e.target.checked}`)
                }
              />
            </Flex>
          </VStack>
        </Box>
      </div>
    </ChakraProvider>
  );
};

const SettingsItem = ({ label }) => {
  return <Box flex="1" mr={4}>{label}</Box>;
};

export default SettingsPage;
