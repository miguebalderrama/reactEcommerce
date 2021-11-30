import React, { useState } from "react";
import  { useEffect } from "react";
import ItemList from "../components/item-list/ItemList";
import { promises } from "../helpers/promises";

const Promises = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentProducts, setCurrentProducts] = useState([]);
  useEffect(() => {
   if(products){
     promises(products , setCurrentProducts, setIsLoading);
   }
  }, [products])

  return (
    <div>
      {isLoading && <h3>is loading...</h3>}
      <ItemList currentProducts={currentProducts} />
    </div>
  );
};

export default Promises;
