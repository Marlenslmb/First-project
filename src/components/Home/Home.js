import { Grid } from '@material-ui/core';
import React from 'react';
import Sortirovka from '../contexts/Filter';
import Content from './Content';

const Home = () => {
    return (
        <div>
            <Grid>
                <Sortirovka/>
                <Content/>
            </Grid>
        </div>
    );
};

export default Home;