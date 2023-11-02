import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Routes/Login/Login';
import Main from '../Routes/Main/main';
import RegAccount from '../Routes/Registration/Reg-account';

const StudyVaultRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/main" element={<Main />} />
    <Route path="/register" element={<RegAccount />} />
  </Routes>
);

export default StudyVaultRoutes;
