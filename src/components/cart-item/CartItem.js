import React, {useContext} from 'react'
import {Container,Image,Button} from "react-bootstrap";
import { CartContext } from '../../context/CartContext';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



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
        <FontAwesomeIcon onClick={()=>removeItem(id)} style={{marginRight:"6px", color:"#797D7F", cursor:"pointer"}} icon={faTrashAlt} size="lg" />
        </div>
        </Container>
        
        
    )
}

export default CartItem
