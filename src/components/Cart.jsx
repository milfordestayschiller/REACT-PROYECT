import { db } from "./firebase.config";
import { Row,Col} from 'react-bootstrap';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
export default  function Carrito () {
  
  const q = query(collection(db, "cart"), 
  where("description", "==", "Polera"));
 
  
 
  const [producto, setProducto] = useState([])

useEffect(() => {
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
     
    }
  })
 
})

return(
  <>
 <div>
 <Row>
    {
    
    producto.map((productos) => {
      
      return (
        <Col   sm={6} md={4} className='mt-5'  key={productos.id}>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body text-center">
            <img src={productos.url} alt=""  style={{ width: 70 }} />
           <h5 className="h5">{productos.title}</h5>
            <p className="card-text">{productos.description}</p>
            <p className="card-text">${productos.price}</p>
            <button className="btn btn-danger">Añadir</button>
            <br /> <br />
        
       
          </div>
        </div>
      </Col>
      )
    })}
  </Row>
</div>


  </>
)



}
