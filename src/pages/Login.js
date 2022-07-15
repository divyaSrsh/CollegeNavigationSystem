import React from 'react';
import {Col, Container, Row, Form,Button} from "react-bootstrap";
import loginIcon from  "../assets/loginIcon.png";
import "../styles/Login.css";

function Login() {
  return (
    <div  className='login-body'>
      <Container className='login-main mt-5'>
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center m-auto p-5">
            < img className='icon-img' src={loginIcon} alt="icon"/>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg" type='submit'>Login</Button>
              </div>
              <div className='text-left mt-3'>
                <a href='#'><small className='reset '>Register</small></a> 
                <a href='#'><small className='reset ml-2'>Forgot Password?</small></a> 
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;