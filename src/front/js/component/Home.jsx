import React, { useEffect, useMemo } from "react";
import useStore from "../store/appContext.jsx";

const Home = () => {
  const { store, action } = useStore();
  const { listUser } = store;
  const { getUser } = action;

  useMemo(() => {
    getUser();
  }, []);
  return (
    <>
      <h1>
        {listUser
          ? listUser.map((user) => <p key={user.id}>{user.email}</p>)
          : null}
      </h1>
    </>
  );
};

export default Home;
