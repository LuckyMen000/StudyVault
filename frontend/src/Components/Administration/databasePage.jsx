import React, { useState, useEffect } from 'react';
import {
    Box,
    Table,
    Tbody,
    Tr,
    Td,
    ChakraProvider,
    ButtonGroup,
    Button
  } from '@chakra-ui/react';
  import './admin.css';

  const AdminPage = () => {
    const [dataFromDB, setDataFromDB] = useState([]);
  
    useEffect(() => {
      // Здесь можно использовать fetch или библиотеки для работы с API для получения данных из БД
      // Например:
      // fetch('URL_вашего_API')
      //   .then(response => response.json())
      //   .then(data => setDataFromDB(data))
      //   .catch(error => console.error(error));
  
      // Пример заглушки данных для отображения в таблице
      const mockDataFromDB = [
        
      ];
      
      setDataFromDB(mockDataFromDB);
    }, [])
  
    return (
      <ChakraProvider>
        <ButtonGroup>
          <Button colorScheme='blue' variant='outline'>Скачать лог</Button>
          <Button colorScheme='blue' variant='outline'>Управление</Button>
        </ButtonGroup>
        <Box className="admin-page">
          {}
          <Table variant="simple" className="data-table">
            <Tbody>
              {dataFromDB.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.description}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </ChakraProvider>
    );
  };
  
  export default AdminPage;