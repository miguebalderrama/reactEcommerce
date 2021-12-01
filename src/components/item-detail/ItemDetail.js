import React, { useState, useContext } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../item-count/ItemCount";
import { CartContext } from "../../context/CartContext";
import NumberFormat from 'react-number-format';
import { SideBySideMagnifier} from "react-image-magnifiers";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ItemDetail({
  id,
  title,
  price,
  pictureUrl,
  stock,
  description,
  quantity,
  setQuantity,
}) {
  const [stateBuy, setStateBuy] = useState(false); //state for buy button
  const { addItem } = useContext(CartContext);

  const handleAddItem = () => {
    if (quantity !== 0) {
      setStateBuy(true);
      const item = {
        id,
        title,
        price,
        pictureUrl,
        stock,
        description,
        quantity,
      };
      addItem(item);
    }

    console.log("Compramos!!!");
  };

  return (
    <Container className="itemDetail" style={{ display: 'flex', marginLeft:"300px"}} >
      <div>
      <Card style={{ width: '25rem', height: '500px', marginTop:'20px' }}>       
      <div>
       
  <SideBySideMagnifier style={{ marginTop: "120px"}} 
  imageSrc={pictureUrl}
  imageAlt="Example"
  largeImageSrc={pictureUrl}
  alwaysInPlace="true"
  />

 

        </div>
        </Card>
      </div>
      <div>
      <Card style={{ width: "18rem", marginTop: "20px",height: '500px',textAlign:'left', backgroundColor:"#F1EFEF" }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "2rem"}}>
          <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                     
          </Card.Title>
          <Card.Text style={{ fontSize: "1.4rem", color:"#333333", marginTop:"15px"}} > {title}   
          </Card.Text>
          <Card.Text>{description}</Card.Text>
          <div style={{ display: "flex", color:"#08875b", marginBottom:"20px",backgroundColor:"white"}}>
            <FontAwesomeIcon icon={faCreditCard} style={{ margin: "8px 10px 0 0"}} />
            <span>Hasta 6 cuotas sin interés con tarjetas de crédito</span>
            </div>
          <div style={{ display: "flex"}}> 
           
            <img  alt="metodos de pago" src="https://tiendamia.com/skin/frontend/traigo/traigo/images/tarjetas-gris-ar.png"></img>
            </div>
          {stateBuy === false && (
            <ItemCount 
              quantity={quantity}
              setQuantity={setQuantity}
              stock={stock}
            />
          )}
          <div className="d-grid gap-2">
            {quantity > 0 && stateBuy === false && (
              <Button variant="primary" onClick={handleAddItem}>
                Agregar al carrito
              </Button>
            )}
            {stateBuy === true && (
              <>
              <Link to="/cart">
                <Button style={{ marginTop: "50px", width:"100%"}} variant="primary" fluid>Ir al carrito</Button>
              </Link>
              <Link to="/"> <Button style={{width:"100%"}} variant="primary" fluid>
              Seguir comprando
            </Button></Link>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
      </div>
    </Container>
  );
}

export default ItemDetail;
