import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Sidebar from '../../Components/Slidebar/slidebar';
import InputForm from '../../Components/Form/input';


const Main = () => {
  return (
    <ChakraProvider>
      <div style={{ display: 'flex', margin: '20px' }}>
        <Sidebar />
        <InputForm /> 
        <div style={{ marginLeft: '250px', padding: '20px' }}>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Main;

