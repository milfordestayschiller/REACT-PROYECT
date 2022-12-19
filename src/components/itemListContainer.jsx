import { db } from "./firebase.config";
import ItemList from "./ItemList"
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./itemDetailContainer";
export default  function ItemListContainer () {
  
  const q = query(collection(db, "cart"),  where('categoria', 'in', ['poleras', 'blusas']));
  
 
  const [show, setProducto] = useState([])
  const {id} = useParams()
useEffect(() => {
  if(id === undefined) {
  getDocs(q)
  .then((productos) => {
 
    if(productos) {
      const document =[];
      productos.forEach((doc) => {
        document.push({
          ...doc.data(),
          id: doc.id
        });
      })
     
      productos.stop = true; 
     
      setProducto(document);
    var result2 = document
   
    }
    else {
      const result = result2.filter((productos) => {
        console.log(id)
        return productos.categoria === id
        })
        setProducto(result)
        console.log(productos.categoria)
        }
   
  })
}

},[id])

return (
  <>
    
   
    {show &&  <div className='container'>
   
     <ItemList show={show}/>
  
    </div>
    }
  </>
)



}




/*
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
*/