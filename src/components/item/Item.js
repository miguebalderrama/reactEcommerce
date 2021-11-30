import React from 'react'
import { Card } from "react-bootstrap";
import "./item.css";

function Item({url,title,price}) {
    return (
  <Card  className="itemZoom" style={{ width: '18rem' ,heigth: 300, margin:'0.5rem',textdecoration:"none" }}>
  <Card.Img variant="top" src={url} />
  <Card.Body>
    <Card.Title className="texto">{title}</Card.Title>
    <Card.Text className="texto">
      Precio ${price}
    </Card.Text>
    
  </Card.Body>
  </Card>
       
    )
}

export default Item
