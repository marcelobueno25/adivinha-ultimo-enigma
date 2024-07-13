import React from "react";
import logo from "../../assets/logo.png";
import "./styles.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="windows-logo">
          <div className="logo-parts">
            <img src={logo} alt="Close" />
          </div>
        </div>
        <div className="preloader-text">
          <h1>Microsoft</h1>
          <h2>
            Windows <span>95</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
