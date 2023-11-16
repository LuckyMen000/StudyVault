import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Routes/Login/Login';
import Main from '../Routes/Main/main';
import RegAccount from '../Routes/Registration/Reg-account';
import AdminPanel from '../Components/Administration/Admin';
import Profile from '../Routes/Profile/profile';
import Notes from '../Routes/Notes/note';

const StudyVaultRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<RegAccount />} />
    <Route path="/admin" element={<AdminPanel/>} />
    <Route path="/main" element={<Main />} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/notes" element={<Notes/>} />
  </Routes>
);

export default StudyVaultRoutes;
