import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import CreateUser from '../components/CreateUser';
import Account from '../components/Account';
import NewPassWord from '../pages/NewPassword';
import CreateAccount from '../pages/CreateAccount';
import Orders from '../pages/Orders';
import MyAccount from '../pages/MyAccount';
import Checkout from '../pages/Checkout';
import SendEmail from '../pages/SendEmail';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword/>} />
                    <Route exact path='/create-user' element={<CreateUser/>} />
                    <Route exact path='/account' element={<Account/>} />
                    <Route exact path='/new-password' element={<NewPassWord/>} />
                    <Route exact path='/create-account' element={<CreateAccount/>} />
                    <Route exact path='/orders' element={<Orders/>} />
                    <Route exact path='/my-account' element={<MyAccount/>} />
                    <Route exact path='/checkout' element={<Checkout/>} />
                    <Route exact path='/send-email' element={<SendEmail/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    );
}
export default App;