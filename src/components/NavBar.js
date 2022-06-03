import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/" className="index-link">
            Index
          </Link>
        </li>
        <li>
          <Link to="/home" className="home-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/notfound">About</Link>
        </li>
      </ul>
    </>
  );
};

// export default NavBar;
