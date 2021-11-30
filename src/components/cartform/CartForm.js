import React, {useContext,useState} from 'react'
import { Form,Button, Container,Image } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext';
import NumberFormat from 'react-number-format';
import { getFirestore } from "../../firebase";



function CartForm() {
    
    const { items } = useContext(CartContext);
    const { totalPrice } = useContext(CartContext); 
    const { clear } = useContext(CartContext); 
    const [orderCreatedId, setorderCreatedId] = useState(null)
    const [btn, setBtn] = useState(false)
    console.log(items);
   
    const handleFinishPurchase = (e) => {
     
      e.preventDefault();
      const name = document.getElementById('name').value;       
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const emailDos = document.getElementById('emailDos').value;
        if(name === '' || email === '' || phone === '' || emailDos === ''){
            alert('Todos los campos son obligatorios');
            return;
        }
        if(email !== emailDos){
          document.getElementById('email').value= '';
          document.getElementById('emailDos').value = '';
            alert('Los emails no coinciden');            
            return;
        }
        
      const newItems = items;
       const newOrder = {
        buyer: {
            name: name,
            phone: phone,
            email: email,
            emailDos: emailDos,
            date: new Date()

        },
        items: newItems,
        totalPrice: totalPrice(),
    }
    const db = getFirestore();
    const order= db.collection('orders')
    order.add(newOrder).then((response)=>{
        setorderCreatedId(response.id);
    }

    ).catch(error=>console.log(error))
    .finally(
      ()=>{clear();
     setBtn(true);});
   
    console.log(newOrder);
}
    return (
        <Container  >

            <h4 style={{ textAlign: 'left', marginLeft:"200px"}}>Completá el formulario y nos pondremos en contacto a la brevedad</h4>
            <h6 style={{ textAlign: 'rigth', marginBottom:'50px'}}>Total a comprar: <NumberFormat value={totalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h6>
       <div  style={{ display: 'flex'}}>
        <Form style={{ width: '300px' , margin: 'auto' }}>
  <Form.Group className="mb-3" >
   
    <Form.Control type="text" placeholder="Ingresu su nombre" required id="name"/>    
  </Form.Group>
  <Form.Group className="mb-3" >    
    <Form.Control type="phone" placeholder="Telefono" id="phone" required />   
  </Form.Group>
  <Form.Group className="mb-3" >
   
    <Form.Control type="email" placeholder="Correo electronico" id="email" required />
  </Form.Group>  
  <Form.Group className="mb-3" >
   
   <Form.Control type="email" placeholder="Repetir correo electronico" id="emailDos"  required />
 </Form.Group>
  <Button onClick={handleFinishPurchase} style={{ marginTop:'80px'}} variant="primary"   disabled ={btn}>
    Enviar orden de compra
  </Button>
</Form>
<Image src={"https://cdn-icons-png.flaticon.com/512/2331/2331966.png"}  style={{ width: '400px'}} />
</div>
{orderCreatedId && <h3>Orden creada con exito: {orderCreatedId}</h3>}

</Container>
    )
}

export default CartForm
