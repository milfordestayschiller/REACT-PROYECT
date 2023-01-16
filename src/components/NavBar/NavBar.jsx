import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import { NavLink } from "react-router-dom";
import CardWidget from '../CartWidget/CardWidget';

export default function NavBarReact(props) {
 

  return (

    <>
      
    <Navbar bg="light" expand="lg" className='bg-dark' >
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"  >
          <NavLink to="/" style={{ color: "white", textDecoration: 'none', margin: 5}}>Home</NavLink>
           <NavLink to="/categoryId/poleras" style={{ color: "white", textDecoration: 'none', margin: 5}}>Poleras</NavLink>
            <NavLink  to="/categoryId/shorts"  style={{ color: "white", textDecoration: 'none', margin: 5}}>Shorts</NavLink>
            <NavLink to="/categoryId/blusas" style={{ color: "white", textDecoration: 'none', margin: 5 }}>Blusas</NavLink>
            <NavLink to="/cart" style={{ color: "white", textDecoration: 'none', margin: 5 }}><CardWidget/> </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>

  );


}