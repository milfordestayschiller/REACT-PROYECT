import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext, useState } from "react";
import "../assets/css/style.css"
import { collection,addDoc } from "firebase/firestore";
 import { db } from '../firebase/firebase.config';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


function CheckOut() {
 const [user, setUser]= useState({})
 const [orderId, setOrderId]= useState('')
 const {cart, cantidadT, clearCart}= useContext(CartContext)

  const addItem =  () => {
    let orden={
      user,
      items: cart,
      total:cantidadT(),
      fecha: new Date()
    }
    addDoc(collection(db,"orders"), orden)
    .then((res)=> {
      setOrderId(res.id )
      clearCart()
    })
    .catch((error)=> console.log(error))
  };

  const handleChange = event => {
      setUser({
        ...user,
      [event.target.name]:event.target.value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(Object.values(user).length === 3 ){
      addItem();
    }else{
      alert('Por favor complete los datos')
    }
  };


    
 
  return (
    <>
    {
      orderId 
      ? <div>
        
        <h1>Muchas gracias por su compra, su orden es: {orderId}</h1>
        <Link to="/">VOLVER</Link>   
      </div>
      
      :<Form  className='center-form' onSubmit={handleSubmit} >
      <Form.Group className="mb-3" >
        <Form.Label>Nombre </Form.Label>
        <Form.Control name="name" type="text" placeholder="Nombre completo" style={{width: 200}} id="nombre"   onChange={handleChange}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Email" style={{width: 200}} onChange={handleChange}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telefono</Form.Label>
        <Form.Control name="phone" type="text" placeholder="Ingrese su Telefono" style={{width: 200}} onChange={handleChange}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Generar Orden de Compra
      </Button>
    </Form>
    }
  
    </>
   
  );
}


export default CheckOut;