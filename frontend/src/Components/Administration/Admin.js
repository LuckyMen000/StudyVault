import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Tbody,
  Tr,
  Td, 
  IconButton,
} from '@chakra-ui/react';
import { SettingsIcon, ArrowBackIcon } from '@chakra-ui/icons';
import './admin.css'

function Dashboard() {
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [users, setUsers] = useState([]); // Список пользователей

  const openCreateUserModal = () => {
    setIsCreatingUser(true);
  };

  const closeCreateUserModal = () => {
    setIsCreatingUser(false);
  };

  const handleLogout = () => {
    // Обработчик для выхода
  };

  // ... (остальной код)

  return (
    <Box className="admin-container" textAlign="center" p={4}>
      <Box width="100%" mx="auto">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Heading className="admin-heading">Панель управления</Heading>
          <Box>
            <IconButton
              icon={<SettingsIcon />}
              aria-label="Настройки"
              className="admin-button"
              onClick={() => {
                // Обработчик для настроек
              }}
            />
            <IconButton
              icon={<ArrowBackIcon />}
              aria-label="Выйти"
              onClick={handleLogout}
              ml={2} // Добавлен отступ между кнопками
            />
          </Box>
        </Box>
        <Button
          onClick={openCreateUserModal}
          className="admin-button"
          colorScheme="teal"
          mb={4} // Добавлен отступ после кнопки
        >
          Создать пользователя
        </Button>
        <Modal isOpen={isCreatingUser} onClose={closeCreateUserModal}>
          {/* ... (модальное окно для создания пользователя) */}
        </Modal>
        <Table className="admin-table">
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                {/* Другие поля пользователя */}
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Button
          className="admin-logout"
          onClick={handleLogout}
          colorScheme="red"
          mt={4} // Добавлен отступ перед кнопкой
        >
          Выйти
        </Button>
      </Box>
    </Box>
  );
  }
  

  


export default Dashboard;
