import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Start = ({ handleNext }) => {
  const handleStart = () => {
    handleNext();
  };

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
      minHeight="100%"
      bgcolor="#ffe4e1"
      color="#4b2e83"
      py={5}
      px={3}
      sx={{ textAlign: "center" }}
    >
      <Typography
        className="guess-title"
        variant="h2"
        gutterBottom
        maxWidth="600px"
      >
        Quiz do Crush
      </Typography>
      <Typography className="guess-title" variant="h5" mb={5} maxWidth="600px">
        É hora de testar seus conhecimentos! Responda às perguntas e descubra se
        você sabe tudo sobre o seu namorado. <br />
        Boa sorte! 😉
      </Typography>
      <Button
        className="menu-button primary"
        variant="contained"
        color="primary"
        onClick={handleStart}
        component={motion.div}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Iniciar
      </Button>
    </Box>
  );
};

export default Start;
