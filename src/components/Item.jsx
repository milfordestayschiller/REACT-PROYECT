import {useState} from 'react'
import { Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import "./assets/css/style.css"
export default function Item ({productos}) {
  const [counts, setCount] = useState(0)
  const increase = () => {
    setCount(counts + 1);
  }
  return (
    <>
    <Col   sm={6} md={4} className='mt-5'>
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body text-center">
      
        <img src={productos.pictureUrl} alt="" style={{ width: 70 }} />
        <h5 className="h5">{productos.title}</h5>
        <p className="card-text">{productos.description}</p>
        <p className="card-text">${productos.price}</p>
        <button className="btn btn-danger" onClick={increase}>Añadir {counts}</button>
        <br /> <br />
        <Link to={`/ItemId/${productos.id}`}><Button >Ver Detalle 
</Button>
</Link>
   
      </div>
    </div>
  </Col>
  </>
  )
}