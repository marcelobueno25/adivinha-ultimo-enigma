import React from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const File = ({ name, onClick }) => {
  return (
    <motion.div className="file" onClick={onClick} whileHover={{ scale: 1.1 }}>
      <div className="file-icon"></div>
      <div className="file-name">{name}</div>
    </motion.div>
  );
};

export default File;
