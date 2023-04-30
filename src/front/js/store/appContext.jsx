import React, { useState, useEffect, createContext, useContext } from "react";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = createContext();

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35

const API_URL = process.env.REACT_APP_API_URL;

export const ContextProvider = ({ children }) => {
  const [listUser, setListUser] = useState([]);
  const [user, setUser] = useState({});

  const getUser = async () => {
    return fetch(API_URL + "/all-users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setListUser(data);
      })
      .catch((err) => console.log(err));
  };
  const handleCreateNewUser = async (data) => {
    const { email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    return fetch(API_URL + "/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  const handleLogin = async (data, handleOk) => {
    const { email, password } = data;
    localStorage.removeItem("token");
    return fetch(API_URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.status === 401) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        handleOk("/private");
        localStorage.setItem("token", data.login_token);
      })
      .catch((err) => console.log(err));
  };

  const handlePrivateInfo = async (handleError) => {
    return fetch(API_URL + "/private", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (res.status != 200) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => handleError("/"));
  };
  //this will be passed as the contenxt value
  const store = { listUser, user };
  const action = {
    handleCreateNewUser,
    handleLogin,
    getUser,
    handlePrivateInfo,
    setUser,
  };

  // The initial value for the context is not null anymore, but the current state of this component,
  // the context will now have a getStore, getActions and setStore functions available, because they were declared
  // on the state of this component
  return (
    <>
      <Context.Provider value={{ store, action }}>{children}</Context.Provider>
    </>
  );
};

const useStore = () => {
  return useContext(Context);
};

export default useStore;
