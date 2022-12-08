import { useState, } from "react"
import { useEffect } from 'react';
import Loading from './Loading';
import "../components/assets/css/style.css"
import ItemList from './ItemList'
import { CATEGORIA_PRODUCTOS } from "./Products/Categoria_Productos";
import { useParams } from "react-router-dom";
import Greetting from "./Greeting";
export default function ItemListContainer(props) {
 //Se pasan mediante props a ItemList

 const {id} = useParams()

   const TIMEOUT = 2000
  

  const [show, setShow] = useState(CATEGORIA_PRODUCTOS);
  const [data, setData] = useState("");
  useEffect(() => {
    if(id === undefined) {
      setShow(CATEGORIA_PRODUCTOS)
       }
       else {
        const result = CATEGORIA_PRODUCTOS.filter((productos) => {
          return productos.categoria === id
          })
          setShow(result)
          }
  },[id])
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = true;
      if (response) {
        resolve(CATEGORIA_PRODUCTOS);
      }else {
        reject(console.log("Se a producido un error"))
      }
    }, TIMEOUT);
  });
  promise
    .then((res) => setData(res))
    .catch((error) => (console.log("Se produjo un error al llamado de PRODUCTOS" + error)))
 
  return (
    <>
      
      {!data && <Loading />}
      {show && data && <div className='container'>
       {<Greetting title="Free Clothes" />}
       <ItemList show={show}/>
      </div>
      }
    </>
  )
}
