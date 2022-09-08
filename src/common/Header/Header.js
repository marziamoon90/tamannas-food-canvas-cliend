import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import background from '../../images/background/bg-header.jpg'
import logo from '../../images/icon/logo.png'

const Header = () => {
  return (
    <>
      <div style={{
        // backgroundImage: `url(${background})`,
        backgroundColor: "#F3EEBB",
        width: "100%", height: "100%"
      }}>
        <Navbar collapseOnSelect sticky="top" expand="lg" variant="light">
          <Container className='d-flex align-items-center justify-content-center '>
            <img className="d" width="120px" src={logo} alt="" />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse style={{ display: 'flex !important', alignItems: "center", justifyContent: "center", fontWeight: "bolder" }} className='d-flex align-items-center' id="responsive-navbar-nav">
              <Nav className="nav-bar">
                <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Nav className='rounded px-3' style={{ backgroundColor: "#29A352", }}>
              <Nav.Link className='text-light fw-bolder ' as={NavLink} to="/login">Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header