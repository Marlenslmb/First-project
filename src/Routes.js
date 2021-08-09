import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductContextProvider from './components/contexts/ProductContext';
import Add from './components/CRUD/AddBook';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Detail from './components/Product/Detail';
import Edit from './components/CRUD/Edit'
import Login from './components/Authoriz/Login';
import MailContext from './components/contexts/MailContext';
import Registration from './components/Authoriz/Registration';

const Routes = () => {
    return (
        <MailContext>
            <ProductContextProvider>
                <BrowserRouter>
                    <Navbar /> 
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/add" component={Add}/>
                        <Route exact path="/edit/:id" component={Edit}/>
                        <Route exact path="/detail/:id" component={Detail}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/registration" component={Registration}/>

                    </Switch>
                </BrowserRouter>

            </ProductContextProvider>
        </MailContext>
    );
};

export default Routes;