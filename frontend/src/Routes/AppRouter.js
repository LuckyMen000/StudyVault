import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Routes/Login/Login';
import Main from '../Routes/Main/main';
import RegAccount from '../Routes/Registration/Reg-account';
import AdminPanel from '../Components/Administration/Admin';
import AdminPanelDatabase from '../Components/Administration/databasePage';
import Profile from '../Routes/Profile/profile';
import Notes from '../Routes/Notes/note';
import Settings from '../Routes/SettingsPage/settingsPage';
import HomeWork from '../Routes/Homework/homework';

const StudyVaultRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<RegAccount />} />
    <Route path="/admin" element={<AdminPanel/>} />
    <Route path="/admin/database" element={<AdminPanelDatabase/>} />
    <Route path="/main" element={<Main />} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/notes" element={<Notes/>} />
    <Route path="/settings" element={<Settings/>} />
    <Route path="/homework" element={<HomeWork/>} />
  </Routes>
);

export default StudyVaultRoutes;
