import React from "react";
import logo from "../../assets/logo.png";
import "./styles.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="windows-logo">
          <img src={logo} alt="Close" />
        </div>
        <div className="preloader-text">
          <h1>MemoirSoft</h1>
          <h2>
            Winlove <span>95</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
