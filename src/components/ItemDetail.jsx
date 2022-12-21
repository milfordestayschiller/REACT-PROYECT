
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'reactstrap';
import { useState } from 'react';


import { createContext } from 'react';
import NavBarReact from './NavBar';
import CarWidget from './CardWidget';



export const Context = createContext();
export default function ItemDetail({unicoProducto}) {
 
  const [counts, setCount] = useState(0)
    const increase = () => {
      setCount(counts + 1);
    }
  console.log(unicoProducto)
  
    return (
      
        <>
    

    <Context.Provider value={counts}>

    <NavBarReact />
  
    </Context.Provider>
    <CarWidget counts={counts}/>
   
   
     <Container className="text-center" >
      <Row xs={1} md={2} className="g-4 mt-5">
       
          <Col className="text-center" key={unicoProducto.id}>
            <Card style={{ width: '40rem', height: '25rem' }}>
              <Card.Img  variant="top" src={`../${unicoProducto.url}`} style={{width:100}}/>
              <Card.Body >
                <Card.Title>{unicoProducto.title}</Card.Title>
                <Card.Text>
               {unicoProducto.description}
               </Card.Text>
               <Card.Text>
               <h1>Precio </h1>{unicoProducto.price}
               </Card.Text>
              
              </Card.Body>
              <button className="btn btn-danger" onClick={increase}>{counts}</button>
            </Card>
          </Col>
        
      </Row>
    
      </Container>
      

      </>
  
    );
        
  }