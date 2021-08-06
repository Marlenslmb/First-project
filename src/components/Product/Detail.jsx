import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../contexts/ProductContext';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: '40px auto',
        maxWidth: 1000,
        height: 'auto'
    }
}))

const Detail = () => {
    const {id} = useParams()
    const {detail, getDetail} = useContext(productContext)
    const classes = useStyles()

    useEffect(() => {
        getDetail(id)
    }, [id])

    return (
         <Paper elevation={3} className={classes.paper}>
            <Typography variant='h2' style={{textAlign: 'center'}}>Подробнее:</Typography>
            {
                detail ? (
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <img style={{width: '500px'}} src={detail.image} alt=""/>
                        </div>
                        <div style={{
                            width: '450px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center'
                        }}>
                            <Typography variant='h3' gutterBottom>{detail.title}</Typography>
                            <Typography variant='h4' gutterBottom>{detail.author}</Typography>
                            <Typography variant='subtitle1' gutterBottom>{detail.type}</Typography>
                            <Typography variant='body1' gutterBottom>{detail.description}</Typography>
                            <Typography variant='h4' gutterBottom>{detail.price}р.</Typography>

                        </div>
                    </div>

                ) : (<h1>Loading...</h1> )
            }
        </Paper>
    );
};

export default Detail;