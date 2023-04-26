import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login.jsx";
import Signup from "../views/Signup.jsx";
import Private from "../views/Private.jsx";
import Home from "../component/Home.jsx";

const Routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/private",
    element: <Private />,
  },
  {
    path: "/allusers",
    element: <Home />,
  },
]);

export default Routes;
