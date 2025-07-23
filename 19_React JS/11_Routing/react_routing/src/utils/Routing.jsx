import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import User from "../Components/User";
import UserDetails from "../Components/UserDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/User" element={<User />} />
      <Route path="/User/:name" element={<UserDetails />} />
      //! user ke niche userDetail open karna ho jab
      {/* <Route path="/User" element={<User />}>
        <Route path="/User/:name" element={<UserDetails />} />
      </Route> */}
      <Route path="/About" element={<About />} />
    </Routes>
  );
};

export default Routing;
