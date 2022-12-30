import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../components/assets/css/style.css"
function Orders() {
  return (

    <Form  className='center-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre </Form.Label>
        <Form.Control type="text" placeholder="Nombre completo" style={{width: 200}} />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" style={{width: 200}} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su Telefono" style={{width: 200}} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Generar Orden de Compra
      </Button>
    </Form>
   
  );
}

export default Orders;