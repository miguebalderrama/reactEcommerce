import React from 'react'
import { Link } from 'react-router-dom';
import Item from '../item/Item'
import "./ItemList.css";

function ItemList({products}) {
    console.log({products});
    return (
        <div className="item-list">         
          {products.map(({id, title, pictureUrl,price})=>(
             <Link to={`/item/${id}`}>
              <Item key={id} price={price} title={title} url={pictureUrl}/>
              </Link>
          )
          )}
        </div>
    )
}

export default ItemList
