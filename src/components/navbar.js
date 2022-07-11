import React from "react";
import { FiUser } from "react-icons/fi";
import { Navbar, Container, Nav, NavDropdown  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
      <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="home">Subte APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="status">Status</Nav.Link>
            <Nav.Link href="arrive">Arrive</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Access" id="basic-nav-dropdown">
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Item>Register</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Designed by Andres Wei</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        );
}

export default Navigation;
