import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      {/* <NavLink> */}
      <ul>
        <li>
          <NavLink to="/" className="index-link">
            Index
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" className="home-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/notfound">About</NavLink>
        </li>
      </ul>
      {/* </NavLink> */}
    </>
  );
};

// export default NavBar;
