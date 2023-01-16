
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../firebase/firebase.config';
import { collection, doc, getDoc } from 'firebase/firestore';
export default function ItemDetailContainer() {
    const [unicoProducto, setunicoProducto]= useState({})
    const { id } = useParams();
    useEffect(()=>{
      const coleccionProd = collection(db, "cart")
      const referenciaDoc = doc(coleccionProd, id)
      getDoc(referenciaDoc)
      .then((result)=>{
        setunicoProducto({
          id:result.id,
          ...result.data()
        })
    
      })

      .catch((error)=> console.log(error))
    }, [id])
    return (
        <>
       
     
    <ItemDetail unicoProducto={unicoProducto}/>
      
      

      </>
  
    );
        
  }