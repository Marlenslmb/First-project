import { Grid } from '@material-ui/core';
import React from 'react';
import SideBar from '../contexts/Filter';
import Content from './Content';

const Home = () => {
    return (
        <div>
            <Grid>
                <SideBar/>
                <Content/>
            </Grid>
        </div>
    );
};

export default Home;