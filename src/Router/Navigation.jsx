import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <span>
        <h1>Navigation</h1>
      </span>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/user">
          <li>User</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </header>
  );
}

export default Navigation;
