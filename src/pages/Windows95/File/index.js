import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import "./styles.scss";

const File = ({ name, icon, onClick, color = "#fff" }) => {
  return (
    <motion.div className="file" onClick={onClick} whileHover={{ scale: 1.1 }}>
      <img className="file-icon" src={icon} alt="Close" />
      <Typography
        className="file-name"
        fontSize={14}
        color={color}
        textAlign="center"
        lineHeight={1.2}
        my={0.6}
      >
        {name}
      </Typography>
    </motion.div>
  );
};

export default File;
