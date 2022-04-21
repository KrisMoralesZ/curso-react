import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Layout from '../containers/Layout';
import Login from '../componets/Login';
import '../styles/global.css'
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import CreateUser from '../componets/CreateUser';
import Account from '../componets/Account';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                    <Route exact path='/create-user' element={<CreateUser />} />
                    <Route exact path='/account' element={<Account />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>

    );
}
export default App;