import React from "react";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import "./styles.scss";

const Preloader = () => {
  return (
    <motion.span
      className="preloader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
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
    </motion.span>
  );
};

export default Preloader;
