import React from 'react';
import { Grid } from '@material-ui/core';
import { useContext, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useHistory } from 'react-router-dom';
import { productContext } from '../contexts/ProductContext';



const ProductList = () => {
    let history = useHistory()
    const {products, getProducts} = useContext(productContext)

    useEffect(() => {
        getProducts(history)
    }, [])


    return (
        <>
            <Grid container spacing={3} justify="space-evenly" style={{marginTop: '0px'}}>
                {
                    products ? (
                        products.map((item, index) => (
                            <ProductCard item={item} key={index} history={history}/>
                        ))
                    ) : (<h1>Wait mzfk...</h1>)
                }
            </Grid>
        </>
    );
};

export default ProductList;