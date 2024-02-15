import React from 'react';
import { 
  Box, 
  VStack, 
  Icon, 
  Text, 
  Tooltip 
} from '@chakra-ui/react';
import { 
  FaHome,
  FaUser, 
  FaCog, 
  FaSignOutAlt, 
  FaRegStickyNote, 
  FaHammer 
} from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import './slidebar.css';

const Sidebar = () => {
  return (
    <VStack className="sidebar-container" spacing={4} align="center" background="WhiteAlpha 800">
      <Tooltip label="Главная страница">
        <Box className="box-icon">
          <Link to="/main">
            <Icon as={FaHome} boxSize={6} />
          </Link>
        </Box>
      </Tooltip>
      <Tooltip label="Заметки">
        <Box className="box-icon">
          <Link to="/notes">
            <Icon as={FaRegStickyNote} boxSize={6} />
          </Link>
        </Box>
      </Tooltip>
      <Tooltip label="Профиль">
        <Box className="box-icon">
          <Link to="/profile">
            <Icon as={FaUser} boxSize={6} />
          </Link>
        </Box>
      </Tooltip>
      <Tooltip label="Настройки">
        <Box className="box-icon">
          <Link to="/settings">
            <Icon as={FaCog} boxSize={6} />
          </Link>
        </Box>
      </Tooltip>
      <Tooltip label="Администрирование">
        <Box className="box-icon">
          <Link to="/admin">
            <Icon as={FaHammer} boxSize={6} />
          </Link>
        </Box>
      </Tooltip>
      <Tooltip label="Выход">
        <Box className="box-icon">
          <Icon as={FaSignOutAlt} boxSize={6} />
        </Box>
      </Tooltip>
    </VStack>
  );
};

export default Sidebar;
