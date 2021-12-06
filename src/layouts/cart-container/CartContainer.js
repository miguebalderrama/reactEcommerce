import React, {useContext} from 'react'
import Cart from '../../components/cart/Cart';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import NumberFormat from 'react-number-format';


function CartContainer() {
    const { items } = useContext(CartContext);
    const { totalPrice } = useContext(CartContext);    


    return (
        <div>
            <p>Mi carrito</p>
            {items.length > 0 ? <Cart items={items}/>:<div> <h2>Carrito vacio</h2> <Link to="/"> <Button variant="outline-primary">
                Volver a la tienda
              </Button></Link> </div>}
              <h3>Precio Total: <NumberFormat value={totalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </h3>           
              <Link to="/cartForm">
             <Button style={{ width:"150px", marginTop:"100px" }} variant="primary">Ir a pagar</Button>
            </Link>
            

        </div>
    )
}

export default CartContainer
