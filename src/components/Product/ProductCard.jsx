import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useContext } from 'react';
import { productContext } from '../contexts/ProductContext';
import React from 'react';;


export default function ProductCard({item, history}) {
  const {deleteProduct} = useContext(productContext)
  
  return (
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" style={{width: '165px', margin: '0 auto',}} src={item.image} />
    <Card.Body>
      <Card.Title>
          {item.title}
      </Card.Title>
      <Card.Text >
        {item.description.substring(0, 100)}...
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush" >
      <ListGroupItem>Автор: {item.author}</ListGroupItem>
      <ListGroupItem>Жанр: {item.type}</ListGroupItem>
      <ListGroupItem>Цена: {item.price}р.</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href={`/edit/${item.id}`} style={{color: 'black', textDecoration: 'none'}}>
        <Button style={{backgroundColor: 'rgba(19, 16, 16, 0.932)'}}>
          &#9997;
        </Button>
      </Card.Link>
      <Card.Link >
        <Button aria-label="share" onClick={() => deleteProduct(item.id, history)} style={{backgroundColor: 'rgba(19, 16, 16, 0.932)'}}>
          &#10060;
        </Button>
      </Card.Link>
    </Card.Body>
  </Card>
  )
}
