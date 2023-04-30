import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useForm from "../hooks/useForm.jsx";
import useStore from "../store/appContext.jsx";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

const Login = () => {
  const { action } = useStore();
  const { handleLogin } = action;
  const { form, handleForm } = useForm();
  const navigate = useNavigate();

  const autorization = () => {
    handleLogin(form, navigate);
  };

  return (
    <div className="Login">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleForm}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" onClick={autorization}>
          LogIn
        </Button>
      </Form>
    </div>
  );
};

export default Login;
