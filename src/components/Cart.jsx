import { useContext } from 'react';

import { CartContext } from './context/CartContext';
export default function Cart () {
  const {cart}= useContext(CartContext)
  console.log(cart, 'carrito')
  return(
    <div className="div">
{cart}
    </div>
  )
}