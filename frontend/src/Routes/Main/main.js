import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Sidebar from '../../Components/Slidebar/slidebar';
import InputForm from '../../Components/Form/input';
import Profile from '../../Components/ProfileBox/profilebox';
import NoteBox from '../../Components/NotesBox/Notes';
import HomeWorkInfo from '../../Components/HomeworkInfo/homeworkinfo';
import HomeWorkSlider from '../../Components/HomeworkSlider/Homeworkslider';
import './main.css'

const Main = () => {
  return (
    <ChakraProvider>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', padding: '5px', marginLeft:'10px'}}>
        <Sidebar />
        <div style={{ position: 'absolute', marginLeft: '120px' }}>
          <div>
            <InputForm />
            <div style={{ marginTop:'15px' }}>
            <HomeWorkInfo/>            
            </div>
            <HomeWorkSlider/>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <div style={{ marginBottom: '20px' }}>
            <Profile />
          </div>
          <NoteBox />
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Main;
