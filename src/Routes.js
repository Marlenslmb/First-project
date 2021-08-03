import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductContextProvider from './contexts/ProductContext';
import Navbar from './Header/Navbar';

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