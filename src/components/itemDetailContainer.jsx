import { CATEGORIA_PRODUCTOS } from './Products/Categoria_Productos';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
export default function ItemDetailContainer() {
    const [unicoProducto, setunicoProducto]= useState({})
    const { id } = useParams();
    
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            const response = true;
            if (response) {
              resolve(CATEGORIA_PRODUCTOS);
            }else {
              reject(console.log("Se a producido un error"))
            }
          }, 2000);
        });
        promise
          .then((res) => setunicoProducto(res.find((product) => String(product.id) === id)))
          .catch((error) => (console.log("Se produjo un error al llamado de PRODUCTOS" + error)))
      },[id])
    return (
        <>
       
     
    <ItemDetail unicoProducto={unicoProducto}/>
      
      

      </>
  
    );
        
  }