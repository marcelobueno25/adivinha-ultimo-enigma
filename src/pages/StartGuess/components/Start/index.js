import React from "react";
import { Button, Box, Typography, CssBaseline } from "@mui/material";
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

const Start = ({ handleNext }) => {
  const handleStart = () => {
    handleNext();
  };

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
        minHeight="100%"
        bgcolor="#ffe4e1"
        color="#4b2e83"
        p={10}
        sx={{ textAlign: "center" }}
      >
        <Typography variant="h2" gutterBottom maxWidth="600px">
          Bem-vindo
          <br /> ao jogo Amor!
        </Typography>
        <Typography variant="h5" mb={5} maxWidth="600px">
          Tem uma surpresinha simples te esperando. Não é um castelo rs mas é de
          coração! <br /> Adivinhe as palavras e descubra o presente!
        </Typography>
        <Button
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
    </ThemeProvider>
  );
};

export default Start;
