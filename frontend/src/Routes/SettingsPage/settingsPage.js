import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Switch,
  VStack,
  ChakraProvider,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import { css } from '@emotion/react';
import Sidebar from '../../Components/Slidebar/slidebar';


const customStyles = css`
  font-weight: bold;
  color: blue;
`;

<Box css={customStyles}>Стилизованный блок</Box>


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
            <SettingsItem label="Уведомления" />
            <SettingsItem label="Темная тема" />
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
      <Switch
        defaultChecked={false}
        onChange={(e) =>
          console.log(`${label} изменено на ${e.target.checked}`)
        }
      />
    </Box>
  );
};

export default SettingsPage;
