import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals'; 
import Login from '../src/components/Login/Login';
import Main from '../src/components/Main/main';

ReactDOM.render(
  <ChakraProvider>
    <Login/>
  </ChakraProvider>,
  document.getElementById('root')
);

reportWebVitals(console.log); 
