import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Sidebar from '../../Components/Slidebar/slidebar';
import InputForm from '../../Components/Form/input';
import Profile from '../../Components/ProfileBox/profilebox';

const Main = () => {
  return (
    <ChakraProvider>
      <div style={{ display: 'flex', margin: '20px' }}>
        <Sidebar />
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <InputForm />
          <Profile />
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Main;
