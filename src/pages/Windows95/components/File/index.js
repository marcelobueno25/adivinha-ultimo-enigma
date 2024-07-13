import React from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const File = ({ name, icon, onClick }) => {
  return (
    <motion.div className="file" onClick={onClick} whileHover={{ scale: 1.1 }}>
      <img className="file-icon" src={icon} alt="Close" />
      <div className="file-name">{name}</div>
    </motion.div>
  );
};

export default File;
