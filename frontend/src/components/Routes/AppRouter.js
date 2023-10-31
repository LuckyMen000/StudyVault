import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../Login/Login'
import Main from '../Main/main'

const StudyVaultRoutes = () => (
    <BrowserRouter>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/main" element={<Main/>}></Route>
    </BrowserRouter>
    
)

export default StudyVaultRoutes;