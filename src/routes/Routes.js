import React from 'react'
import Navbar from "../components/NavBar.js";
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import ItemListContainer from "../layouts/item-list-container/ItemListContainer";
import ItemDetailContainer from "../layouts/item-detail-container/ItemDetailContainer";
import NotFound from '../layouts/not-found/NotFound.js';
import CartContainer from '../layouts/cart-container/CartContainer.js';
import CartForm from '../components/cartform/CartForm.js';


const Routes =() =>{
    return (
        <BrowserRouter>
        <Navbar/>        
        <Switch>
            <Route exact path="/">
            <ItemListContainer className="stylegreeting"/>
            </Route>
            <Route path="/category/:categoryId">
            <ItemListContainer className="stylegreeting"/>
            </Route>
            <Route path="/item/:itemId">
            <ItemDetailContainer/>
            </Route>
            <Route path="/cart">
            <CartContainer/>
            </Route>
            <Route path="/cartForm">
            <CartForm/>
            </Route>
            <Route path="*">
            <NotFound/>
            </Route>
            
            
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
