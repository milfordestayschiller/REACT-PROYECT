import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import Card from 'react-bootstrap/Card';
import { Col} from 'react-bootstrap';
import '../components/assets/css/style.css'

export default function Cart () {
 
  const {cart,deleteItem,clearCart,cantidadTotal,cantidadT}= useContext(CartContext)
 

console.log(cart)

  return(
    <>
   { !cart.length 
   ?<div>
    <h2>Tu carrito esta vacio!</h2>
    <Link to ='/'>Ir a comprar</Link>
   </div>
   :<div>
    <h2>Tu carrito</h2>
   {cart.map((productos) => {
     
        return (
          <div className="div container" key={productos.id}>
            <Col   sm={6} md={4} className='mt-5'>
          <Card className="text-center" style={{width: 400}}>
          
          <Card.Body>
            <Card.Title>{productos.title}</Card.Title>
            <Card.Text>
             {productos.description}
            </Card.Text>
            <Card.Img  variant="top" src={productos.url} style={{width:100}}/>
          </Card.Body>
          <Card.Text>
             Cantidad : {productos.cantidad}
            </Card.Text>
          <Card.Text>
             {productos.price}
            </Card.Text>
            <Card.Text>
              Total: ${productos.price * productos.cantidad}
              
            </Card.Text>
        </Card>
        </Col>
        <button onClick={() => deleteItem(productos.id)}>Eliminar Producto</button>
        

        </div>
        
         )
         
         
        })}
        <h1 className='cantidad'>Cantidad Total: {cantidadTotal()}</h1>
        <h1>Precio Total: {cantidadT()}</h1>
        <button onClick={clearCart}>Vaciar carrito</button>
        <Link to={`/orders`}> <button>Generar orden de compra</button>
        </Link>
 
</div>}
 

    </>
)
    }