import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div id="hero">
      <div className="overlayMain">
        <div className="location">
          <img src="../img/heroBG1.jpg" alt="logoImg" />
          <div className="headline">
            <h3>
              <i>TOZIN SOKAK Br. 8</i> NOVI SAD
            </h3>
            <h1>GDE PROMENA POČINJE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
