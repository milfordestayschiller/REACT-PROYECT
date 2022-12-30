import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'reactstrap';
import { useContext } from 'react';



import ItemCounter from './itemCounter';
import { CartContext } from './context/CartContext';


export default function ItemDetail({unicoProducto}) {
 const {addToCart} = useContext(CartContext)
  const onAdd = (cantidad) =>{
    
    addToCart(unicoProducto, cantidad)
  }
  
    return (
      
        <>

     <Container className="text-center" >
      <Row xs={1} md={2} className="g-4 mt-5">
       
          <Col className="text-center" key={unicoProducto.id}>
            <Card style={{ width: '40rem', height: '25rem' }}>
              
              <Card.Body >
                <Card.Title>{unicoProducto.title}</Card.Title>
                <Card.Text>
               {unicoProducto.description}
               </Card.Text>
               <Card.Img  variant="top" src={unicoProducto.url} style={{width:100}}/>
               <Card.Text>
               <h1>Precio </h1>{unicoProducto.price}
               </Card.Text>
               <Card.Text>
           
               </Card.Text>
              </Card.Body>
                  <ItemCounter  onAdd={onAdd} stock={10}/>
            </Card>
          </Col>
        
      </Row>
    
      </Container>
      

      </>
  
    );
        
  }