import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

const HomeworkPage = () => {
  const [selectedExtensions, setSelectedExtensions] = useState([]);

  const availableExtensions = ['.docx', '.doc', '.rtf', '.pptx', '.xlsx'];

  const handleExtensionChange = (extension) => {
    if (selectedExtensions.includes(extension)) {
      setSelectedExtensions(selectedExtensions.filter((ext) => ext !== extension));
    } else {
      setSelectedExtensions([...selectedExtensions, extension]);
    }
  };

  const filterDocumentsByExtensions = () => {
    console.log('Selected Extensions:', selectedExtensions);
    
  };

  return (
    <ChakraProvider>
      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <Menu>
          <MenuButton as={Button} colorScheme="blue" variant="outline" mb="2">
            Фильтр по расширениям
          </MenuButton>
          <MenuList>
            {availableExtensions.map((extension) => (
              <MenuItem key={extension}>
                <Checkbox
                  isChecked={selectedExtensions.includes(extension)}
                  onChange={() => handleExtensionChange(extension)}
                >
                  {extension}
                </Checkbox>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Button colorScheme="blue" variant="outline" onClick={filterDocumentsByExtensions}>
          Применить фильтр
        </Button>
      </Box>

      <Box textAlign="center" mt="4">
        <Heading as="h1" mb="4">
          Домашние задания
        </Heading>
        <Container maxW="xl">
          {/* Код для отображения списка домашних заданий здесь */}
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default HomeworkPage;
