import React from "react";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./store/appContext.jsx";
import Routes from "./routes/Routes.jsx";

//create your first component
const App = ({ children }) => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

  return (
    <div>
      <ContextProvider>
        <RouterProvider router={Routes}>
        </RouterProvider>
      </ContextProvider>
    </div>
  );
};

export default App;
