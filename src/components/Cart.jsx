import { useContext } from 'react';
import { Context } from './ItemDetail';
export default function Cart (props) {
  const value = useContext(Context)
  console.log(value)
  return(
    <div className="div">
<button>{value}</button>
    </div>
  )
}