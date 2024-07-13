// src/components/Preloader.js
import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import "./styles.scss";

const Preloader = () => {
  return (
    <Box
      className="preLoader"
      component={motion.div}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <div class="glitch" data-text="GLITCH">
        BEM VINDA
      </div>
    </Box>
  );
};

export default Preloader;
