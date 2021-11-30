import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/item-detail/ItemDetail";

import { getFirestore } from "../../firebase";

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectProduct, setSelectProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const { itemId } = useParams();
  let numberId = String(itemId);

  useEffect(() => {
    if (itemId) {
      const db = getFirestore();
const itemCollection = db.collection("products");

itemCollection.get().then(querySnapshot =>{
  console.log(querySnapshot);
  if(querySnapshot.size===0){
    console.log("No hay items")
    return
  }
  setSelectProduct(querySnapshot.docs.map(document => ({
    id: document.id,
    ...document.data()
  })))
 
}).catch(error=>console.log(error)).finally(()=>setIsLoading(false));
      console.log("efecto de montaje detail container");
    }
  }, [itemId]);

  return (
    <div>
      {isLoading && <h3>is loading...</h3>}

      {!isLoading && (
        <ItemDetail 
          quantity={quantity}
          setQuantity={setQuantity}
          {...selectProduct.find((results) => results.id === numberId)}
        />
      )}
      {console.log(selectProduct.find((results) => results.id === numberId))}
    </div>
  );
}

export default ItemDetailContainer;

