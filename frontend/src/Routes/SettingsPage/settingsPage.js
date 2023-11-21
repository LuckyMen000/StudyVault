import React from 'react';
import { Box, Heading, Divider, Switch, VStack } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import { css } from '@emotion/react';
const customStyles = css`
  /* Ваши пользовательские стили */
  font-weight: bold;
  color: blue;
`;

// И примените их к компоненту
<Box css={customStyles}>Стилизованный блок</Box>


const SettingsPage = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4} fontSize="2xl">
        <SettingsIcon mr={2} />
        Настройки
      </Heading>
      <Divider mb={4} />
      <VStack spacing={4} align="flex-start">
        <SettingsItem label="Уведомления" />
        <SettingsItem label="Темная тема" />
        {/* Добавьте другие элементы настроек */}
      </VStack>
    </Box>
  );
};

const SettingsItem = ({ label }) => {
  return (
    <Box w="100%" display="flex" justifyContent="space-between">
      <Box>{label}</Box>
      <Switch
        defaultChecked={false} // Установите значение по умолчанию
        onChange={(e) => console.log(`${label} изменено на ${e.target.checked}`)}
      />
    </Box>
  );
};

export default SettingsPage;
