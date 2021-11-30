import React, {useContext} from 'react'
import {Container,Image,Button} from "react-bootstrap";
import { CartContext } from '../../context/CartContext';

function CartItem({id,title,pictureUrl,price,quantity}) {
    console.log(title);
    const { removeItem } = useContext(CartContext);
    return (
             
        <Container style={{ display: 'flex' , flexDirection: 'row' , justifyContent:'space-between', borderBottom: 'solid 1px #e6e6e6', paddingBottom :'20px', alignItems:'center'}}>
        <Image variant="top" src={pictureUrl} style={{ width: '8rem' }} />
        <h5>{title}</h5>
        <div>${price}</div>
        <div>{quantity}</div>
        <div>
        <Button onClick={()=>removeItem(id)} variant="outline-danger">Eliminar</Button>
        </div>
        </Container>
        
        
    )
}

export default CartItem
