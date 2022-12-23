import { useContext } from 'react';

import { CartContext } from './context/CartContext';
export default function Cart () {
 
  const {cart,deleteItem,clearCart}= useContext(CartContext)
 
console.log(cart)


  return(
    <>
   <div>
   {cart.map((productos) => {
     
        return (
         <div className="div" key={productos.id}>
          <h1>{productos.categoria}</h1>
          <h1>{productos.cantidad}</h1>
          <button onClick={() => deleteItem(productos.id)}>Delete</button>
         </div>
         
         )
         
         
        })}
        <button onClick={clearCart}>Vaciar carrito</button>
 
</div>
 
  
    </>
)
    }