import { createContext,useState } from "react";

export const CartContext = createContext(false);

export const CartProvider = ({defaultValue=[],children})=>{
    const [items,setItems] = useState(defaultValue);

    const addItem=(currentItem)=>{
        console.log(currentItem.id);
        console.log(items);
        if(items.some((item)=>item.id===currentItem.id)){
            return;
        }
        setItems([...items,currentItem]);
    };
    const removeItem=(itemId)=>{
        const findItem = items.filter((item)=>item.id!==itemId);        
        setItems(findItem);     
    }

    const clear=()=> setItems([]);
    const isInCart=(itemId)=>{
        if(items.find((item)=>item.id===itemId)){
            return true;
        }
        return false;
    }
    const totalPrice = ()=>{ 
        const result= items.reduce((acc, item)=>acc+(item.price*item.quantity),0)
        return result;};
    const totalQuantity = ()=>{ const cartQuantity = items.reduce((acc, item)=>acc+item.quantity,0)
        return cartQuantity;};
    return(
        <CartContext.Provider value={{items,addItem,removeItem,clear,isInCart,totalPrice,totalQuantity}}>
           {children}
        </CartContext.Provider>
    )
}
