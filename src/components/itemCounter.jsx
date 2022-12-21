import { useState } from 'react';
export default function ItemCounter () {
    const [counts, setCount] = useState(0)
    const increase = () => {
      setCount(counts + 1);
    }
    return(
        <button className="btn btn-danger" onClick={increase}>Añadir {counts}</button>
    )
}