import React from "react";
import useStore from "../store/appContext.jsx";

const Home = () => {
  const store = useStore();
  const { listUser } = store;
  console.log(listUser);

  return <h1>{listUser}</h1>;
};

export default Home;
