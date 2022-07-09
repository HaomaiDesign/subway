import React from "react";
import { FiUser } from "react-icons/fi";
import { Navbar, Container, Nav  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
      <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Subte APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="status">Status</Nav.Link>
            <Nav.Link href="arrive">Arrive</Nav.Link>
            <Nav.Link href="json">JSON</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#"><FiUser /> Access</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        );
}

export default Navigation;
