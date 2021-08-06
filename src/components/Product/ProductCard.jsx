import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useContext } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { productContext } from '../contexts/ProductContext';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductCard({item, history}) {
  const classes = useStyles();
  const {deleteProduct, addProductInCard, checkProductInCart} = useContext(productContext)
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  let icons = (
    <CardActions disableSpacing>
      <Link to={`/edit/${item.id}`} style={{color: 'black', textDecoration: 'none'}}>
          <IconButton aria-label="add to favorites">
            <EditIcon/>
          </IconButton>
      </Link>
      <IconButton aria-label="share" onClick={() => deleteProduct(item.id, history)}>
            <DeleteIcon />
      </IconButton>
    </CardActions>
  )

  return (
    <Card className={classes.root}>
      <Link to={`/detail/${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
        <CardHeader
          title={item.title}
          subheader={item.type}
        />
        <Typography>{item.author}</Typography>
        <CardMedia
          className={classes.media}
          image={item.image}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.price}
        </Typography>
      </CardContent>
      {icons}
    </Card>
  );
}
