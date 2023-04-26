import React, { useState, useEffect, createContext, useContext } from "react";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = createContext();

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
export const ContextProvider = ({ children }) => {
  const [listUser, setListUser] = useState([]);
  const [newUser, setNewUSer] = useState([]);
  const getUser = async () => {
    return fetch(process.env.BACKEND_URL + "/api/allusers")
      .then((res) => res.json())
      .then((data) => {
        setListUser(data);
      })
      .catch((err) => console.log(err));
  };
  const handleCreateNewUser = async () => {
    console.log("hello");
    return fetch(process.env.BACKEND_URL + "/api/signup")
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  //this will be passed as the contenxt value
  const store = { listUser };
  const action = { handleCreateNewUser };

  useEffect(() => {
    getUser();
  }, []);

  // The initial value for the context is not null anymore, but the current state of this component,
  // the context will now have a getStore, getActions and setStore functions available, because they were declared
  // on the state of this component
  return (
    <>
      {" "}
      <Context.Provider value={{ store, action }}>{children}</Context.Provider>
    </>
  );
};

const useStore = () => {
  return useContext(Context);
};

export default useStore;
