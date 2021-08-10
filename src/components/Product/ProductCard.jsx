import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useContext } from 'react';
import { productContext } from '../contexts/ProductContext';
import React from 'react';
import './Product.css';
import Edit from '../CRUD/Edit'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { mailContext } from '../contexts/MailContext';
import { useEffect } from 'react';
import AOS from 'aos';
import { IconButton } from '@material-ui/core';

export default function ProductCard({item, history}) {
  const {deleteProduct, editProduct,} = useContext(productContext)
  // const { clientLogin } = useContext(mailContext)
  const [isAdmin, setIsAdmin] = useState(false)


export default function ProductCard({item, history}) {
  const {deleteProduct, editProduct, addProductInCard, checkProductInCart} = useContext(productContext)

  const [open, setOpen] = React.useState(false);
  const admin = 'admin@gmail.com'

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  


  const handleOpen = () => {
    setOpen(true);
    editProduct(item.id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let user = localStorage.getItem('user')
    if(user){
      if(user === admin){
        setIsAdmin(true)
      }
    }
  }, [])


  return (
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    >
    <Card style={{ width: '20rem' }} >
    <Card.Img variant="top" style={{width: '165px', margin: '0 auto',}} src={item.image} />
    <Card.Body>
      <Card.Title>
          {item.title}
      </Card.Title>
      <Card.Text>
        {item.description.substring(0, 100)}...
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush" >
      <ListGroupItem>Автор: {item.author}</ListGroupItem>
      <ListGroupItem>Жанр: {item.type}</ListGroupItem>
      <ListGroupItem>Цена: {item.price}р.</ListGroupItem> 
    </ListGroup>
    <Edit open={open} handleClose={handleClose} handleOpen={handleOpen} />
    {
      isAdmin ? (<Card.Body>
        <Card.Link  style={{color: 'black', textDecoration: 'none'}}>
        <Button onClick={()=>handleOpen()} style={{backgroundColor: 'rgba(19, 16, 16, 0.932)'}}>
          &#9997;
        </Button>
      </Card.Link>
      <Card.Link >
      <Button aria-label="share" onClick={() => deleteProduct(item.id, history)} style={{backgroundColor: 'rgba(19, 16, 16, 0.932)'}}>
        &#10060;
      </Button>
    </Card.Link>
    </Card.Body>
      ) : (null)
    }
    <Card.Body>
      <Card.Link style={{color: 'black', textDecoration: 'none'}}>
        <Link to={`/detail/${item.id}`}>
          <Button style={{backgroundColor: 'rgba(19, 16, 16, 0.932)'}}>
            Подробнее...
          </Button>
        </Link>
        <IconButton
          aria-label="share" 
          onClick={() => addProductInCard(item)}
          color={checkProductInCart(item.id) ? "secondary" : "light"}>
           &#10010;
        </IconButton>
      </Card.Link>
    </Card.Body>
  </Card>
  </div>
  )
}
