import { Grid } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { productContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';





const ProductsList = () => {
    let history = useHistory();
    const { products, getProducts } = useContext(productContext)
    return (
        <>
            <Grid container spacing={3} justify="space-evenly" style={{marginTop: '0px'}} >
                {
                        products ? (
                            products.map((item, index) => (
                                <ProductCard item={item} key={index} history={history} />
                            ))
                        ) : (<h1>...Загрузка</h1>)
                }
            </Grid>
        </>
    );
};

export default ProductsList;