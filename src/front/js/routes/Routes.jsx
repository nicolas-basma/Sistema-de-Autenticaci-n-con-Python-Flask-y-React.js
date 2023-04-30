import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login.jsx";
import Signup from "../views/Signup.jsx";
import Private from "../views/Private.jsx";
import Home from "../component/Home.jsx";
import Layout from "../layout.js";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
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
        path: "/all-users",
        element: <Home />,
      },
    ],
  },
]);

export default Routes;
