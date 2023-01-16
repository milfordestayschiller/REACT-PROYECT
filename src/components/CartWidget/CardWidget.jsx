import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { BsFillCartPlusFill } from "react-icons/bs";

export default function CardWidget () {
  const {cantidadTotal}= useContext(CartContext)
  return(
  <>
    <BsFillCartPlusFill style={{ color: "white" }} size={30} />
    {cantidadTotal()}
  </>
  )
}