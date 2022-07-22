import React from "react";
import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LoginFormContainer from "../container/loginFormContainer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { register } from "../actions/userAction";
import Loader from "./loader";
import Message from "./message";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  // const redirect = location.search ? location.search.split('=')[1] : "/";

  const SubmitHandler = (e) => {
    console.log('submit handler')
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage("passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <LoginFormContainer >
      <h1 className="loginscreen">New User Registration </h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      <Form  onSubmit={SubmitHandler}>
        <Form.Group controlId="name">
          <Form.Label> Name </Form.Label>
          <Form.Control
            required
            type="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required                                   
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Register
        </Button>

      </Form>
      <Row className="py3">
        <Col>
          Have an Account ?
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Sign in
          </Link>
        </Col>
      </Row>
    </LoginFormContainer>
  );
};

export default RegisterScreen;
