import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import "../styles/Navbar.css";

const  Navigationbar=() => {

  return (
        <Navbar  className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className='leftSide' href="/">CETgo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='rightSide'>
                <Nav.Link href="/dept">Department</Nav.Link>
                <Nav.Link href="#deets">Events</Nav.Link>
                <NavDropdown title="More" id="collasible-nav-dropdown">
                  <NavDropdown.Item classname='drop-down'  href="#action/3.1">Emergency Contact</NavDropdown.Item>
                  <NavDropdown.Item classname='drop-down' href="#action/3.2">Exam Hall Search</NavDropdown.Item>
                  <NavDropdown.Item classname='drop-down' href="#action/3.3">About Us</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item classname='drop-down' href="/login">Sign In</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
  )
}

export default Navigationbar;
