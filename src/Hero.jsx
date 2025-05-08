import React from "react";
import my_profile from "../src/images/profile.jpg";

const Hero = () => {
  return (
    <div className="top">
      <div className="heroprofile">
        <img src={my_profile} alt="profile" />
       
      </div>
    </div>
  );
};

export default Hero;
