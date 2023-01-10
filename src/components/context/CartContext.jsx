import { createContext, useState } from "react";



export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([]);
        const addToCart = (item, cantidad) => {

    
            setCart([...cart, {...item, cantidad}])
           
        }
     
// elimina todo del carrito
        const clearCart = () => {
            setCart([]);
        };
        
        const deleteItem = (id) => {
            setCart(cart.filter((item)=> item.id !== id)
        )}
    
        const cantidadTotal= () => {
            let cant = 0
            cart.forEach((e) => cant += e.cantidad)
            return cant
        };

        const cantidadT= () => {
            return cart.reduce((acc, prod)=> acc + prod.cantidad * prod.price,0)
           
        };
      
    
    return(
        <CartContext.Provider value={{cart, addToCart, clearCart,deleteItem,cantidadTotal,cantidadT}}>
            {children}
           
        </CartContext.Provider>
    )
}