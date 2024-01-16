import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Modal,
  Table,
  Tbody,
  Tr,
  Td,
  IconButton,
  ChakraProvider,
} from '@chakra-ui/react';
import { 
  SettingsIcon, 
  ArrowBackIcon,
  ChatIcon
} from '@chakra-ui/icons';
import { FaDatabase } from 'react-icons/fa';
import Sidebar from '../../Components/Slidebar/slidebar';
import { Link } from 'react-router-dom';
import './admin.css';

function Dashboard() {
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [users, setUsers] = useState([]); 

  const openCreateUserModal = () => {
    setIsCreatingUser(true);
  };

  const closeCreateUserModal = () => {
    setIsCreatingUser(false);
  };

  const handleLogout = () => {
  };


  return (
    <ChakraProvider>
      <div style={{ display: 'flex', margin: '20px' }}>
        <Sidebar />
        <Box className="admin-container" textAlign="center" p={4} width="100%">
          <Box width="100%" mx="auto">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={4}
            >
              <Heading className="admin-heading">Панель управления</Heading>
              <Box>
                <Link to="/admin/database" className="database-button">
                  <IconButton
                    icon={<FaDatabase />}
                    aria-label="База Данных"
                    mr={2}
                    onClick={() => {
                    }}
                  />
                </Link>
                <Link to="/settings" className="admin-button">
                  <IconButton
                    icon={<SettingsIcon />}
                    aria-label="Настройки"
                    className="admin-button"
                    onClick={() => {
                    }}
                  />
                </Link>
                <IconButton
                  icon={<ArrowBackIcon />}
                  aria-label="Выйти"
                  onClick={handleLogout}
                  ml={2} 
                />
                <IconButton
                  icon={<ChatIcon/>}
                  arial-label=""
                  ml={2}
                />
              </Box>
            </Box>

            <Box>
              <Text mb="12px">
                Создание пользователя
              </Text>
            <Button
              onClick={openCreateUserModal}
              className="admin-button"
              colorScheme="teal"
              mb={4}
            >
              Создать пользователя
            </Button>
            <Modal isOpen={isCreatingUser} onClose={closeCreateUserModal}>
            </Modal>
            <Table className="admin-table">
              <Tbody>
                {users.map((user) => (
                  <Tr key={user.id}>
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            </Box>
          </Box>
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default Dashboard;
