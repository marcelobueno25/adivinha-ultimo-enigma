import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Reveal = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      bgcolor="#ffe4e1"
      color="#4b2e83"
      p={10}
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h4" mb={2}>
        Surpresa!
      </Typography>
      <Typography variant="h5" mb={5}>
        Num espaço onde sabores se misturam e memórias são criadas, Busca onde o
        aroma dos sonhos é transformado em realidade encantada.
      </Typography>
    </Box>
  );
};

export default Reveal;
