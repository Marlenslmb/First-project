import React, { useContext, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
import { productContext } from './ProductContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, makeStyles, Button } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import './filter.css'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Sortirovka = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory()
  const {getProducts} = useContext(productContext)
  const [type, setType] = useState(getType())
  const [price, setPrice] = useState(getPrice())

    function getPrice(){
        const search = new URLSearchParams(history.location.search)
        return search.get('price_lte')
    }

    function getType(){
        const search = new URLSearchParams(history.location.search)
        return search.get('type')
    }

    const handleChangePrice = (event, value) => {
        const search = new URLSearchParams(history.location.search)
        search.set('price_lte', value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProducts(history)
        setPrice(value)
    }

    const handleChangeType = (event) => {
        if(event.target.value === 'all'){
            history.push(`${history.location.pathname.replace('type')}`)
            getProducts(history)
            setType(event.target.value)
            return
        }
        const search = new URLSearchParams(history.location.search)
        search.set('type', event.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProducts(history)
        setType(event.target.value)
    }
    const handleDrop = () => {
        history.push(`${history.location.pathname.replace('type')}`)
        history.push(`${history.location.pathname.replace('price_lte')}`)
        getProducts(history)
        setType(getType())
        setPrice(getPrice())
    }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="btn3" >
      <Button onClick={handleClickOpen} style={{backgroundColor: '#f50057'}}>Открыть сортировку</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Выберите категорию</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Жанры</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={type} onChange={handleChangeType}>
                    <FormControlLabel value="Роман" control={<Radio />} label="Роман" />
                    <FormControlLabel value="Ужас" control={<Radio />} label="Ужасы" />
                    <FormControlLabel value="Литература" control={<Radio />} label="Литература" />
                    <FormControlLabel value="Детектив" control={<Radio />} label="Детективы" />
                    <FormControlLabel value="Психология" control={<Radio />} label="Психология" />
                    <FormControlLabel value="Зарубежный роман" control={<Radio />} label="Зарубежный роман" />
                    <FormControlLabel value="all" control={<Radio />} label="Все" />
                </RadioGroup>
                </FormControl>
            <Grid>
                <Slider
                    value={price}
                    onChange={handleChangePrice}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    min={150}
                    max={1700}
                />
                <Button variant='outlined' color='primary' onClick={handleDrop} >Сбросить</Button>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Sortirovka