import { db } from "../firebase/firebase.config";
import ItemList from "../ItemList/ItemList"
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/style.css"

export default  function ItemListContainer () {

  useEffect(() => {})
  
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
   <h1 className="texto">Free Clothes</h1>
     <ItemList show={show}/>
  
    </div>
    }
  </>
)



}


