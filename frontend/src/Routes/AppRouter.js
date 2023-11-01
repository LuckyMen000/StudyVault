import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../../components/Login/Login'
import Main from '../../components/Main/main'

const StudyVaultRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/main" element={<Main/>}></Route>
        </Switch>
    </BrowserRouter>
    
)

export default StudyVaultRoutes;