import { Grid } from '@material-ui/core';
import React from 'react';
import Carusel from '../Carusel/Carusel';
import Content from './Content';

const Home = () => {
    return (
        <div>
            <Grid>
                <Carusel />
                <Content/>
            </Grid>
        </div>
    );
};

export default Home;