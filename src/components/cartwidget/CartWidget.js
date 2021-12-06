import React, {useContext, useState,useEffect} from "react";
import { Image} from "react-bootstrap";
import { CartContext } from '../../context/CartContext';
import "./CartWidget.css";




function CartWidget({classCount,cartCount,className,tittleCart}) {
  const { totalQuantity } = useContext(CartContext);
  const [stateDisplay, setDisplay] = useState("visible"); //state for buy button
  useEffect(() => {
  if(totalQuantity ()){
    setDisplay("visible");
  }
  else{
    setDisplay("hidden");
  }}, [totalQuantity]);
  return (
      <>
     <div style={{ marginLeft:"10px", marginBottom:"10px"}} className={stateDisplay} > 
    <Image  className={className} title={tittleCart}
      src="https://tiendamia.com/skin/frontend/traigo/traigo/images/svg/carrito_header.svg"
      rounded
    />
    <span className={classCount}>{totalQuantity()}</span>
   </div>
   </>
  );
}

export default CartWidget;
