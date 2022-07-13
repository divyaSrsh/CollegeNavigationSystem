import React,{useState} from 'react'
import {Navbar,Container,Nav,NavDropdown,Button,Form} from "react-bootstrap";

const  Navigationbar=() => {

  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
    console.log(value)
  };


const onSubmit = (event) => {
  event.preventDefault(); // Prevent default submission
  
  console.log('Your registration was successfully submitted!');
  console.log("hello")
   
}
  return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">CETgo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Form className="d-flex" onSubmit={onSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={onChange}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
              
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Department</Nav.Link>
              <Nav.Link href="#deets">Events</Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Emergency Contact</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Exam Hall Search</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">About Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Sign In</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigationbar;
