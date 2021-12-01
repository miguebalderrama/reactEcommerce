import React from 'react'
import { Card } from "react-bootstrap";
import "./item.css";
import NumberFormat from 'react-number-format';


function Item({url,title,price}) {
    return (
  <Card  className="itemZoom" style={{ width: '18rem' ,heigth: 300, margin:'0.5rem',textdecoration:"none" }}>
  <Card.Img variant="top" src={url} />
  <Card.Body>
    <Card.Title className="texto" ><NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Card.Title>
    <Card.Text >
      <span className="textoPrice" >{title}</span>
      <br/>
      <span  style={{ fontSize: '14px',color:"#00a650", textAlign:"left"}}>Hasta 6 cuotas sin interes</span>
      <span style={{ fontSize: '14px',color:"#00a650", backgroundColor:"#e6f7ee"}}> 15%OFF</span>
    </Card.Text>
    
  </Card.Body>
  </Card>
       
    )
}

export default Item
