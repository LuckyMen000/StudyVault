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
import './admin.scss'; // Импорт файла стилей с маленькой буквы

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
    <Box className="admin-container">
      <Box display="flex" justifyContent="space-between" alignItems="center">
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
          />
        </Box>
      </Box>
      <Button onClick={openCreateUserModal} className="admin-button">Создать пользователя</Button>
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
      <Button className="admin-logout" onClick={handleLogout}>Выйти</Button>
      <Modal isOpen={isCreatingUser} onClose={closeCreateUserModal}>
        {/* ... (модальное окно для создания пользователя) */}
      </Modal>
    </Box>
  );
}

export default Dashboard;
