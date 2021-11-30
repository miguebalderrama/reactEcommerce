import React, { useState, useContext } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../item-count/ItemCount";
import { CartContext } from "../../context/CartContext";
import NumberFormat from 'react-number-format';
import { GlassMagnifier} from "react-image-magnifiers";


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
    <Container style={{ display: 'flex', marginLeft:"300px"}} >
      <div>
      <Card style={{ width: '25rem', height: '500px', marginTop:'20px' }}>
       
        <div>
        <GlassMagnifier style={{ marginTop: "120px"}}
  imageSrc={pictureUrl}
  imageAlt="Example"
  largeImageSrc={pictureUrl} // Optional
  magnifierSize="50%" // Optional
/>
 

        </div>
        </Card>
      </div>
      <div>
      <Card style={{ width: "18rem", marginTop: "20px",height: '500px',textAlign:'left' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "2rem"}}>
          {title}              
          </Card.Title>
          <Card.Text style={{ fontSize: "1.4rem", color:"grey", marginTop:"15px"}} > <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </Card.Text>
          <Card.Text>{description}</Card.Text>
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
                <Button style={{ marginTop: "100px", width:"100%"}} variant="primary" fluid>Ir al carrito</Button>
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
