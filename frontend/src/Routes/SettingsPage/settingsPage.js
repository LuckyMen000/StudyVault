import React from 'react';
import {
  Box,
  Heading,
  Divider,
  VStack,
  ChakraProvider,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import { css } from '@emotion/react';
import Sidebar from '../../Components/Slidebar/slidebar';
import ThemeToggle from '../../AppTheme.js'

const customStyles = css`
  font-weight: bold;
  color: blue;
`;

const SettingsPage = () => {
  return (
    <ChakraProvider>
      <div style={{ display: 'flex', margin: '20px' }}>
        <Sidebar/>
        <Box p={4}>
          <Heading as="h1" mb={4} fontSize="2xl">
            <SettingsIcon mr={2} />
            Настройки
          </Heading>
          <Divider mb={4} />
          <VStack spacing={4} align="flex-start">
            <div style={{display: 'flex'}}>
            <ThemeToggle /> 
            <SettingsItem label="Темная тема" />
            </div>
          </VStack>
        </Box>
      </div>
    </ChakraProvider>
  );
};

const SettingsItem = ({ label }) => {
  return (
    <Box w="100%" display="flex" justifyContent="space-between">
      <Box>{label}</Box>
    </Box>
  );
};

export default SettingsPage;
