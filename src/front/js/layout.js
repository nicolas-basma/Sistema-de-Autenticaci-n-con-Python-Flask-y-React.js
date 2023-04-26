import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { ContextProvider } from "./store/appContext.jsx";
import MyNavbar from "./component/MyNavbar.jsx";
import { Footer } from "./component/footer";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Private from "./views/Private.jsx";
import Home from "./component/Home.jsx";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <ContextProvider>
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <MyNavbar />
            <Routes>
              <Route element={<Private />} path="/private" />
              <Route element={<Login />} path="/login" />
              <Route element={<Signup />} path="/signup" />
              <Route element={<Home />} path="/allusers" />
            </Routes>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
};

export default Layout;
