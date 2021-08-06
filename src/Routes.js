import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductContextProvider from './components/contexts/ProductContext';
import Add from './components/CRUD/AddBook';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Detail from './components/Product/Detail';
import Edit from './components/CRUD/Edit'

const Routes = () => {
    return (
        <ProductContextProvider>
            <BrowserRouter>
                <Navbar /> 
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/add" component={Add}/>
                    <Route exact path="/edit/:id" component={Edit}/>
                    <Route exact path="/detail/:id" component={Detail}/>

                </Switch>
            </BrowserRouter>

        </ProductContextProvider>
    );
};

export default Routes;