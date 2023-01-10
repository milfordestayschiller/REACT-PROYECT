import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import "../components/assets/css/style.css"
import { collection,addDoc } from "firebase/firestore";
 import { db } from './firebase.config';

// Add a new document in collection "cities"


function Orders({user}) {
 
  const addItem = (name) => {
    addDoc(collection(db,"lotes"), {
      name: {name},
     
     
     
    });
  };
  const handleChange = event => {

    setName(event.target.value);
    
  };
  const handleSubmit = event => {
    event.preventDefault();
    addItem(name);
  };
 
  const [name, setName] = useState("");
 
  return (

    <Form  className='center-form' onSubmit={handleSubmit} >
      <Form.Group className="mb-3" >
        <Form.Label>Nombre </Form.Label>
        <Form.Control type="text" placeholder="Nombre completo" style={{width: 200}} id="nombre" value={name}  onChange={handleChange}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" style={{width: 200}} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su Telefono" style={{width: 200}} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Generar Orden de Compra
      </Button>
    </Form>
   
  );
}


export default Orders;