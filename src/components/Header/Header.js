import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <NavLink to="/">
        <h2>Quick Quiz</h2>
      </NavLink>
      <div className="header-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
    </div>
  );
};

export default Header;
