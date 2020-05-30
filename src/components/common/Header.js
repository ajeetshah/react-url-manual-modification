import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">Test</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Athletes">Athletes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
