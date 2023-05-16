import React, { useState } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import loginIcon from "../assets/loginIcon.png";
import "../styles/Login.css";
import {useNavigate} from "react-router-dom"
// import { useLoginCred } from '../hooks/getLoginCred';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const navigate = useNavigate()
  const [pswd, setPswd] = useState("");
  const [login, setLogin] = useState(0); // 0-not login start 1- login 2-invalid

  const onChangeUserName = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPswd(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default submission
    setLogin(true);
    try {
      console.log(username + " " + pswd);
      await axios
        .post(
          "http://127.0.0.1:5000/login",
          {
            username: username,
            password: pswd,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.data.id) {
            sessionStorage.setItem("userId", res.data.id);
          }
          console.log(res.data.message);
          if (res.data.message[0] == "L") setLogin(1);
          else setLogin(2);
          navigate("/profile")
        });
    } catch (err) {
      console.log(err);
      console.log("Login API call not complete");
    }
  };

  return (
    <div className="login-body">
      <Container className="login-main mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center m-auto p-5">
            <img className="icon-img" src={loginIcon} alt="icon" />
            {login == 2 && (
              <Alert className="loginalert" key="danger" variant="danger">
                Error! Invalid username or password.
              </Alert>
            )}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="username"
                  onChange={onChangeUserName}
                  placeholder="Enter username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  onChange={onChangePassword}
                  placeholder="Password"
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleLogin}
                  type="submit"
                >
                  Login
                </Button>
              </div>
              {/* <div className="text-left mt-3">
                <a href="#">
                  <small className="reset ">Register</small>
                </a>
                <a href="#">
                  <small className="reset ml-2">Forgot Password?</small>
                </a>
              </div> */}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
