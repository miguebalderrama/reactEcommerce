import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from "react-bootstrap";


function ItemCount({quantity,setQuantity,stock}) {
  let contador=quantity
  const increment = (contador) =>{
    console.log("me ejecute");
    if (contador + 1 <= stock) {
      contador = contador + 1;
    }
    setQuantity(contador);
  }
  const decrement = (contador) => {
    console.log("me ejecute");
    if (contador - 1 >= 0) {
      contador = contador - 1;
      console.log("decremente");
    }
    setQuantity(contador);
  }
  
  return (
    <Container style={{ margin: "30px 0 10px 0", border: "solid 1px grey",textAlign:'center' }}>
              <Row>
                <Col style={{ color: "#3383FF", cursor: "pointer" }} onClick={() => decrement(contador)}>
                 <FontAwesomeIcon icon={faMinus} />
                </Col>
                <Col><strong>{quantity}</strong></Col>
                <Col style={{ color: "#3383FF", cursor: "pointer" }} onClick={() => increment(contador)}>
                  <FontAwesomeIcon icon={faPlus} />
                </Col>
              </Row>
            </Container>
  )
}

export default ItemCount
