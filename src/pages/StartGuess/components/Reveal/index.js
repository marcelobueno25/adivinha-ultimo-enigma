import React from "react";
import { useGlobalContext } from "../../../../Context/GlobalContext";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const Reveal = ({ handleNext }) => {
  const { globalVariable, setGlobalVariable } = useGlobalContext();

  const handleRestart = () => {
    setGlobalVariable({ ...globalVariable, quizz: false });
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
      height="100%"
      bgcolor="#ffe4e1"
      color="#4b2e83"
      p={10}
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h4" mb={2}>
        Você Desbloqueou o Código Secreto!
      </Typography>
      <Typography variant="h5" mb={5}>
        Aqui está o código secreto que você desbloqueou: [Cifra de César - 13].
        Use-o para decodificar outros secretos! 😉
      </Typography>
      <Button
        className="menu-button primary"
        variant="contained"
        color="primary"
        onClick={handleRestart}
        component={motion.div}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Voltar ao Inicio
      </Button>
    </Box>
  );
};

export default Reveal;
