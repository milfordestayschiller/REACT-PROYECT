import { createContext, useState } from "react";



export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([]);
        const addToCart = (item, cantidad) => {
            setCart([...cart, {...item, cantidad}])
           
        }
     
// elimina todo del carrito
        const removeItem = (index) => {
            setCart(cart.filter((productos, id) => index !== id));
        };
        
        const deleteItem = (id) => {
            setCart(cart.filter((item)=> item.id !== id)
        )}
    
        
    
    return(
        <CartContext.Provider value={{cart, addToCart, removeItem,deleteItem}}>
            {children}
           
        </CartContext.Provider>
    )
}