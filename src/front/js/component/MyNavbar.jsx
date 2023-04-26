import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar>
      <Container>
        <Link to="/signup">
          <span className="navbar-brand mb-0 h1">Create your acount</span>
        </Link>
        <Nav>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
