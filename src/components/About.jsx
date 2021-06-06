import React from "react";
import about from "../assets/about.jpg";

function About() {
  return (
    <div className="container-lg about-box mt-5">
      <div className="col-sm about-img">
        <img src={about} alt="about" />
      </div>
      <div className="about-text col-md">
        <h2>About us</h2>
        <h1 style={{color:"#d79a19"}}>WE ARE HERE TO DREAME</h1>
        <h2>OUR TEAM IS HERE SURVEY YOU</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

export default About;
