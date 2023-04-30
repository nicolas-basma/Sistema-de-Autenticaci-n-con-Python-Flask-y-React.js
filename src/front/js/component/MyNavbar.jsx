import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import useStore from "../store/appContext.jsx";

const MyNavbar = () => {
  const navigate = useNavigate();
  const { store, action } = useStore();
  const { user } = store;
  const { setUser } = action;

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUser({});
    navigate("/");
    console.log(user);
  };

  const memo = useMemo(() => {
    return Boolean(user.id);
  }, [user]);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2022/12/07/02/58/ai-generated-7640108_1280.jpg"
            width="100"
            height="70"
            className="d-inline-block align-top"
          />
          <Link to="/signup">Create your acount</Link>
        </div>
        <Nav>
          {memo ? (
            <button onClick={handleLogOut}>LogOut</button>
          ) : (
            <button onClick={() => navigate("/")}>LogIn</button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
