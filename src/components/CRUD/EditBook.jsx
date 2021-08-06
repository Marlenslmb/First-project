import { Button, IconButton, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { productContext } from '../contexts/ProductContext';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        '@media all and (-ms-high-contrast: none)': {
        display: 'none',
        },
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    }));
    
    const Edit = () => {
        const rootRef = React.useRef(null);
        let {id} = useParams();
        let history = useHistory();
        const classes = useStyles()
        const {edit, editProduct, saveEditProduct} = useContext(productContext)
        const [values, setValues] = useState(null)

    useEffect(() => {
        editProduct(id)
    },[id])

    useEffect(() => {
        setValues(edit)
    }, [edit])


    const handleEditInp = (e) => {
        let obj = {
            ...values,
            [e.target.name] : e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        saveEditProduct(values)
        history.push('/')
    }

    return (
        <div className={classes.root} ref={rootRef}>
        <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            className={classes.modal}
            container={() => rootRef.current}
        >
            <div className={classes.paper}>
            <h2 id="server-modal-title">Изменить данные</h2>
            {
                values ? (
                    <form className={classes.root} noValidate autoComplete="off">
                            <TextField name="image" onChange={handleEditInp} value={values.image} variant="outlined" label="Image"/>
                            <TextField name="title" onChange={handleEditInp} value={values.title} variant="outlined" label="Title"/>
                            <TextField name="author" onChange={handleEditInp} value={values.author} variant="outlined" label="Author"/>
                            <TextField name="type" onChange={handleEditInp} value={values.type} variant="outlined" label="Type"/>
                            <TextField name="price" onChange={handleEditInp} value={values.price} variant="outlined" label="Price"/>
                            <TextField name="description" 
                                onChange={handleEditInp} 
                                value={values.description} 
                                variant="outlined" label="Description" 
                                gutterBottom 
                                multiline
                                rows={4}
                            />
                            <IconButton aria-label="share" onClick={handleSave}>
                                <Button variant="contained" color="primary">Сохранить</Button>
                            </IconButton>
                        </form>
                ) : (<h1>Wait mzfk...</h1> )
            }
                </div>
            </Modal>
            </div>
        );
    }

    export default Edit;