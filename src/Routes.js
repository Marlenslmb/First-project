import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductContextProvider from './components/contexts/ProductContext';
import Navbar from './components/Header/Navbar';

const Routes = () => {
    return (
        <ProductContextProvider>
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route />
                </Switch>
            </BrowserRouter>

        </ProductContextProvider>
    );
};

export default Routes;