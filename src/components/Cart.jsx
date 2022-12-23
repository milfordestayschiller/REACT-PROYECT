import { useContext } from 'react';

import { CartContext } from './context/CartContext';
export default function Cart () {
 
  const {cart,removeItem,deleteItem}= useContext(CartContext)
 



  return(
    <>
   <div>
   {cart.slice(-1).map((productos,id) => {
     
        return (
         <div className="div" key={id}>
          <h1>{productos.cantidad}</h1>
          <button onClick={() => removeItem(id)}>Delete</button>
          <button onClick={() => deleteItem(id)}>Delete2</button>
         </div>
         
        )
       
       
      })}
 
</div>
 
  
    </>
)
    }
