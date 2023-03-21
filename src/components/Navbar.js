import React,{useState} from 'react'
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import "../styles/Navbar.css";

const  Navigationbar=({nav,setNav}) => {
  const  [showDeptNav, setShowDeptNav] = useState(false)


  return (
        <Navbar  className='navbar' collapseOnSelect expand="lg" >
          <Container>
            <Navbar.Brand className='leftSide' href="/" >CETgo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='rightSide'>
                <Nav.Link href="/dept" onClick={() => {
                  setNav(true)}}>Department</Nav.Link>
                <Nav.Link href="/profile">Events</Nav.Link>
                <Nav.Link href="/Navi">Navigation</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
                <NavDropdown title="More" id="collasible-nav-dropdown">
                  <NavDropdown.Item classname='drop-down'  href="#action/3.1">Emergency Contact</NavDropdown.Item>
                  <NavDropdown.Item classname='drop-down' href="#action/3.2">Exam Hall Search</NavDropdown.Item>
                  <NavDropdown.Item classname='drop-down' href="#action/3.3">About Us</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <div className='dept-nav' hidden={!showDeptNav}>
            <input className='dept-nav-loc'type="text" placeholder="Start Location"/>
            <input className='dept-nav-loc' type="text" placeholder="Destination"/>
            <div className='dept-nav-btn'>
                <button>Cancel</button>
                <button>Find Route</button>
            </div>
        </div>
          </Container>
        </Navbar>
  )
}

export default Navigationbar;
