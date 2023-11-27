import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Sidebar from '../../Components/Slidebar/slidebar';
import InputForm from '../../Components/Form/input';
import Profile from '../../Components/ProfileBox/profilebox';
import NoteBox from '../../Components/NotesBox/Notes';

const Main = () => {
  return (
    <ChakraProvider>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <div style={{ display: 'flex', margin: '20px' }}>
        <Sidebar />
        <InputForm />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '920px' }}>
          <div style={{ marginBottom: '20px' }}>
            <Profile />
          </div>
          <NoteBox />
        </div>
      </div>
      </div>
    </ChakraProvider>
  );
};

export default Main;
