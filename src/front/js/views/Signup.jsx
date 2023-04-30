import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useStore from "../store/appContext.jsx";
import useForm from "../hooks/useForm.jsx";
import "../../styles/signup.css";

const Signup = () => {
  const { action } = useStore();
  const { handleCreateNewUser } = action;
  const { handleForm, form } = useForm();
  return (
    <div className="Signup">
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
          <Form.Label>Create a password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleForm}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Repeat the password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="confirmPassword"
            onChange={handleForm}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" onClick={() => handleCreateNewUser(form)}>
          Signup
        </Button>
      </Form>
    </div>
  );
};
export default Signup;
