import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals'; 
import StudyVaultRoutes from '../src/Routes/AppRouter';

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <StudyVaultRoutes />
    </Router>
  </ChakraProvider>,
  document.getElementById('root')
);

reportWebVitals(console.log); 
