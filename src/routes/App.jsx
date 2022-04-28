import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/recovery-password" component={RecoveryPassword} />
                    <Route exact path='/create-user' component={CreateUser} />
                    <Route exact path='/account' component={Account} />
                    <Route exact path='/new-password' component={NewPassWord} />
                    <Route exact path='/create-account' component={CreateAccount} />
                    <Route exact path='/orders' component={Orders} />
                    <Route exact path='/my-account' component={MyAccount} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route exact path='/send-email' component={SendEmail} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    );
}
export default App;