import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();
const Context = (props) => {
  const [users, setUsers] = useState([
    {
      id: 0,
      username: "mayank",
      city: "Jaipur",
    },
    {
      id: 1,
      username: "mansi",
      city: "Jodhpur",
    },
    {
      id: 2,
      username: "unknown",
      city: "USA",
    },
  ]);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
