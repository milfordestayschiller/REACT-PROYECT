import { useState } from 'react';
export default function ItemCounter ({onAdd, stock}) {
    const [counts, setCount] = useState(0)
    const increase = (event) => {
   
      if(counts < stock){
        event.preventDefault()
        setCount(counts + 1);
      }
    }
    const decrease = (event) => {
      
      if(counts > 0){
        event.preventDefault()
        setCount(counts - 1);
      }
    }
    return(
        <>
        <div>
        <button className="btn btn-danger" onClick={increase}>+</button>
        <span>{counts}</span>
        <button className="btn btn-danger" onClick={decrease}>-</button>
        </div>
        <button onClick={()=>onAdd(counts) }>Agregar al Carrito</button>
        </>

    )
}