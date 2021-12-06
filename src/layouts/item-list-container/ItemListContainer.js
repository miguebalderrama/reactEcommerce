import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap'
import ItemList from "../../components/item-list/ItemList";
import "./itemListContainer.css"
import { getFirestore } from "../../firebase";
import Banner from "../../components/banner/Banner";



function ItemListContainer({className}) {

  const [isLoading, setIsLoading] = useState(true);
  const [selectFilter, setSelectFilter] = useState([]);
  const [products, setProducts]= useState([]);

useEffect(()=>  {
const db = getFirestore();
const itemCollection = db.collection("products");

itemCollection.get().then(querySnapshot =>{
  console.log(querySnapshot);
  if(querySnapshot.size===0){
    console.log("No hay items")
    return
  }
  setProducts(querySnapshot.docs.map(document => ({
    id: document.id,
    ...document.data()
  })))
 
}).catch(error=>console.log(error)).finally(()=>setIsLoading(false));
  
 } ,[]);

    const  {categoryId}  = useParams();
    useEffect(() => {      
      if (categoryId) {        
        console.log("recibi parametros de URL");   
        console.log({categoryId});     
        setSelectFilter( products.filter(results =>  results.category === categoryId))
      }
      else {
      console.log("Ruta vacia!");      
      setSelectFilter(products)
      console.log({products})}
    }, [categoryId, products]);
    return (
      <div>
        
         <Banner/>
        {isLoading && <div className="preloader"></div>
}
        {!isLoading && (
        
        <Container className={className}>        
        <ItemList products={selectFilter} isLoading={isLoading} />
        </Container>
        )}
        </div>
    )
    }

export default ItemListContainer
