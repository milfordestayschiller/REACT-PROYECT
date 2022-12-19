import { db } from "./firebase.config";
import ItemList from "./ItemList"
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default  function ItemListContainer () {
  
  const [show, setProducto] = useState([])
  const {id} = useParams()

useEffect(()=>{
  const coleccionProductos= id ? query(collection(db, "cart"), where("categoria", "==", id)) : collection(db, "cart")
  getDocs(coleccionProductos)
  .then((result)=> {
    const lista = result.docs.map((producto)=>{
      return{
        id:producto.id,
        ...producto.data()
      }
    })
    setProducto(lista)
  })
  .catch((error)=> console.log(error))
}, [id])

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