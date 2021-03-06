import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Navbar';
import {Container,Navbar,Nav} from 'react-bootstrap';
export const NavigationBar = () => {
  return <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Niran S Narayanan</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="/#home" className="navText" >Home</Nav.Link>
      <Nav.Link href="/#about"className="navText" >About Me</Nav.Link>
      <Nav.Link href="/#skills"className="navText" >Skills</Nav.Link>
      <Nav.Link href="/#projects"className="navText" >Projects</Nav.Link>
      <Nav.Link href="/#contact" className="navText"e>Contact</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
  </div>;
};
