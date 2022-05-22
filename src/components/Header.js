import React from "react";

// Bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar className="green-background">
      <Container>
        <Navbar.Brand href="#">Bingo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
