import { createContext, useState } from "react";



export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart]= useState(0);
    const increase = () => {
        setCart(cart + 1);
      }
    return(
        <CartContext.Provider value={{cart}}>
            {children}
            <button className="btn btn-danger" onClick={increase}>Agregar al Carrito{cart}</button>
        </CartContext.Provider>
    )
}