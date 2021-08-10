import { Grid } from '@material-ui/core';
import React from 'react';
import Carusel from '../Carusel/Carusel';
import Sortirovka from '../contexts/Filter';
import Content from './Content';

const Home = () => {
    return (
        <div>
            <Grid>
                <Carusel />
                <Sortirovka/>
                <Content/>
            </Grid>
        </div>
    );
};

export default Home;