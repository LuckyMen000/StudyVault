import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Sidebar from '../../Components/Slidebar/slidebar';
import InputForm from '../../Components/Form/input';

const Main = () => {
  return (
    <ChakraProvider>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '250px', padding: '20px' }}>
          <h1>Main Content</h1>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Main;
