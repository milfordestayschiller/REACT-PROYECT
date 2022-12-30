import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    let contador = 10;
    return(
        <>
        <div>
          <h1>Stock:{contador -counts}</h1>
        <button className="btn btn-danger" onClick={increase}>+</button>
        <span>{counts}</span>
        <button className="btn btn-danger" onClick={decrease}>-</button>
        </div>
       
        <Link to={`/cart`}> <button onClick={()=>onAdd(counts) }>Comprar</button>
        </Link>
        </>

    )
}

