import React, { useState } from "react";
import { Box, Typography, CssBaseline, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6f61", // A soft romantic red
    },
    secondary: {
      main: "#ffc1e3", // A soft pink
    },
  },
  typography: {
    fontFamily: "Cursive, Arial",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },
  },
});

const hints = [
  "Num espaço onde sabores se misturam e memórias são criadas, Busca onde o aroma dos sonhos é transformado em realidade encantada.",
  "No centro de encontros e conversas, Um palco para festas e refeições, Onde partilhamos risos e histórias, Descansa o cenário das degustações.",
  "Eu sou um lugar onde moléculas dançam sem parar, aumentando sua energia. Somente ondas invisíveis sabem como me animar.",
  "Eu sou o guardião do calor silencioso, onde o frio se desfaz e a mudança ocorre em um piscar de olhos. Meu abraço é invisível, mas transforma tudo o que toco.",
  "Meu abraço é breve, mas intenso, meu coração é feito de campos invisíveis. Sou o mestre do tempo e do calor, revelando meus segredos ao toque de um botão.",
];

const Reveal = () => {
  const [currentHintIndex, setCurrentHintIndex] = useState(0);

  const handleNextHint = () => {
    setCurrentHintIndex((prevIndex) =>
      Math.min(prevIndex + 1, hints.length - 1)
    );
  };

  const handlePreviousHint = () => {
    setCurrentHintIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const hintTitles = [
    "Primeira Pista",
    "Segunda Pista",
    "Terceira Pista",
    "Quarta Pista",
    "Quinta Pista",
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor="#ffe4e1"
        color="#4b2e83"
        p={10}
        sx={{ textAlign: "center" }}
      >
        <Typography variant="h2" gutterBottom>
          Presente!
        </Typography>
        <Typography variant="h4" mb={2}>
          {hintTitles[currentHintIndex]}
        </Typography>
        <Typography variant="h5" mb={5}>
          {hints[currentHintIndex]}
        </Typography>
        <Box display="flex" gap={2}>
          {currentHintIndex > 0 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handlePreviousHint}
              component={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Anterior
            </Button>
          )}
          {currentHintIndex < hints.length - 1 && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextHint}
              component={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Próximo
            </Button>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Reveal;
