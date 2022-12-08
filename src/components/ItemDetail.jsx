
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'reactstrap';

export default function ItemDetail({unicoProducto}) {

  
  
    return (
        <>
       
     <Container className="text-center" >
      <Row xs={1} md={2} className="g-4 mt-5">
       
          <Col className="text-center" key={unicoProducto.id}>
            <Card style={{ width: '40rem', height: '25rem' }}>
              <Card.Img  variant="top" src={`../${unicoProducto.pictureUrl}`} style={{width:100}}/>
              <Card.Body >
                <Card.Title>{unicoProducto.title}</Card.Title>
                <Card.Text>
               {unicoProducto.description}
               </Card.Text>
               <Card.Text>
               <h1>Precio </h1>{unicoProducto.price}
               </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        
      </Row>
    
      </Container>
      

      </>
  
    );
        
  }