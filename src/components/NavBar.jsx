import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from './CardWidget';
import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";


export default function NavBarReact(props) {
  
  
  return (

    <>
      
    <Navbar bg="light" expand="lg" className='bg-dark' >
      <Container>
   <CardWidget />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"  >
          <NavLink to="/" style={{ color: "white", textDecoration: 'none', margin: 5}}>Home</NavLink>
           <NavLink to="/categoryId/poleras" style={{ color: "white", textDecoration: 'none', margin: 5}}>Poleras</NavLink>
            <NavLink  to="/categoryId/shorts"  style={{ color: "white", textDecoration: 'none', margin: 5}}>Shorts</NavLink>
            <NavLink to="/categoryId/blusas" style={{ color: "white", textDecoration: 'none', margin: 5 }}>Blusas</NavLink>
            <NavLink to="/categoryId/pareos" style={{ color: "white", textDecoration: 'none', margin: 5 }}>Pareos</NavLink>
            <NavLink   to="/categoryId/bermudas" style={{ color: "white", textDecoration: 'none', margin: 5 }}>Bermudas</NavLink>
            <NavLink to="/categoryId/swetters" style={{ color: "white", textDecoration: 'none', margin: 5 }}>Swetters</NavLink>
            <NavLink to="https://google.cl" style={{ color: "white", textDecoration: 'none', margin: 5 }}><BsFillCartPlusFill style={{ color: "white" }} size={30} /></NavLink>
            <Button variant="primary" >{props.counts}</Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>

  );


}