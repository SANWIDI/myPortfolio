import React from "react";
import my_profile from "../src/images/profile.jpg";

const Hero = () => {
  return (
    <div className="top">
      <div className="profile">
        <img src={my_profile} alt="" />
        <div className="profile-button">
          <a href="mailto:mimi@test.com">
            <strong>SANWIDI</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
