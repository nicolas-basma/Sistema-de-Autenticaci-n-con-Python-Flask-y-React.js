import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./component/footer.jsx";
import MyNavbar from "./component/MyNavbar.jsx";

const Layout = () => {
    return (
        <>
            <MyNavbar />
            <Outlet />
            <Footer />
        </>
    );
};
export default Layout;
