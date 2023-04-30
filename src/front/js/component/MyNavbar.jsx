import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import useStore from "../store/appContext.jsx";

const MyNavbar = () => {
  const navigate = useNavigate();
  const { store } = useStore();
  const { user } = store;
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/signup">Create your acount</Link>
        <Nav>
          {Boolean(user) ? (
            <button onClick={() => console.log("holis")}>LogOut</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
