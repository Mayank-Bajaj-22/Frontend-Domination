import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex mt-10 justify-center gap-10">
      {/* <NavLink style={{color: "red"}} to='/'>Home</NavLink> */}
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>

      <NavLink to="about">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-blue-400" : "",
                e.isActive ? "font-bold" : "",
              ].join(" ")}
            >
              About
            </span>
          );
        }}
      </NavLink>

      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-blue-400" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/user"
      >
        User
      </NavLink>
    </nav>
  );
};

export default Nav;

//! NavLink ki style me hame milta hai ek function jo ki Link me nhi milta
//! .join() convert array into string
// - ["red", "green"].join(" ") , output - [red green]
