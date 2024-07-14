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
        Bem-vindo
        <br /> ao jogo Amor!
      </Typography>
      <Typography className="guess-title" variant="h5" mb={5} maxWidth="600px">
        Tem uma surpresinha simples te esperando. Não é um castelo rs mas é de
        coração! <br /> Adivinhe as palavras e descubra o presente!
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
