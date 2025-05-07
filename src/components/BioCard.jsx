import React from "react";
import { NavLink } from "react-router-dom";
import profile_icon from "../images/cer.png";

const BioCard = () => {
  return (
    <div className="top">
      <div className="top-div"> </div>
      <div className="profile">
        <img src={profile_icon} alt="" />
        <div className="profile-description">
          <h2>Description</h2>
          <p>
            Hello! Iam a passionate web application development student with a
            strong focus on front-end technologies, especially React. I love
            turning ideas into interactive, user-friendly web experiences.
            Through hands-on projects, I have gained practical skills. I am
            currently seeking junior developer opportunities where I can grow
            and contribute to real-world projects. I invite recruiters and tech
            professionals to explore my profile I am excited to bring
            creativity, curiosity, and code to a collaborative and innovative
            development team! So, Let’s connect!
          </p>
        </div>

        <div className="profile-button">
          <NavLink to="/review">Let's Talk</NavLink>
        </div>
      </div>
    </div>
  );
};

export default BioCard;
