import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const NavbarComponent = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>Test app</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Mobx with multiple stores</Nav.Link>
          <Nav.Link href='/hooks'>useCallback / useMemo</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
