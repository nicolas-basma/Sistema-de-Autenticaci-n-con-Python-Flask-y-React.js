import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useStore from "../store/appContext.jsx";

const Signup = () => {
  const action = useStore();
  const { handleCreateNewUSer } = action;
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Create a Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button variant="primary" type="submit" onSubmit={handleCreateNewUSer}>
        Signup
      </Button>
    </Form>
  );
};
export default Signup;
