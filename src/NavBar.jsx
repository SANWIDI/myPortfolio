import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="the_nav">
      <div className="container">
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/BioCard">About</NavLink>
          <NavLink to="/SkillsGallery">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/review">Contact Me</NavLink>
        </div>
       
      </div>
    </nav>
  );
};

export default NavBar;
