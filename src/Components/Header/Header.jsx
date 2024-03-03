import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
      <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='text-danger' href="/">Marvel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="store">Store</Nav.Link>
            {/* <Nav.Link href="about">About</Nav.Link> */}
            <Nav.Link href="signUp">Login/Signup</Nav.Link>
          </Nav>
          <Navbar.Text>
            <Nav.Link href='cart'>Cart
              <FontAwesomeIcon className='ms-2' icon={faShoppingCart} />
            </Nav.Link>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
