import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-compact-disc fa-spin fa-xl" />
            {' '}
            Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header