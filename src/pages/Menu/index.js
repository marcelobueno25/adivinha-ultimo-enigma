// src/components/Menu.js
import React from "react";
import { Box, Button, Typography, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styles.scss"; // Importar o arquivo CSS para animações bugadas

const theme = createTheme({
  palette: {
    primary: {
      main: "#00ff00", // Neon green for a secretive look
    },
    secondary: {
      main: "#ff00ff", // Bright magenta for accents
    },
    background: {
      default: "#0d0d0d", // Very dark background
      gradient:
        "radial-gradient(circle, rgba(29,29,29,1) 0%, rgba(0,0,0,1) 100%)", // Gradient for depth
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#00ff00", // Neon green text
    },
  },
  typography: {
    fontFamily: "Courier New, monospace", // Monospace for a hacker feel
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          padding: "10px 20px",
          fontSize: "1rem",
          margin: "10px",
          minWidth: "200px",
          transition: "transform 0.3s, box-shadow 0.3s",
          boxShadow: "0px 0px 10px rgba(0, 255, 0, 0.5)",
          backgroundColor: "#00ff00",
          color: "#0d0d0d",
          "&:hover": {
            boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.5)",
          },
        },
      },
    },
  },
});

const glitchTextVariants = {
  initial: {
    textShadow: "none",
  },
  animate: {
    textShadow: [
      "none",
      "-2px 2px 0 #ff00ff, 2px -2px 0 #00ffff",
      "2px -2px 0 #ff00ff, -2px 2px 0 #00ffff",
      "-2px 2px 0 #ff00ff, 2px -2px 0 #00ffff",
      "none",
    ],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 0.3,
    },
  },
};

const glitchButtonVariants = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: [0, -2, 2, -1, 1, -1, 1, -2, 2, 0],
    y: [0, -2, 2, -1, 1, -1, 1, -2, 2, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 0.1,
    },
  },
};

const Menu = () => {
  const navigate = useNavigate();
  const currentDate = new Date();
  const unlockDate = new Date("2024-07-13");

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component={motion.div}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        p={10}
        sx={{
          textAlign: "center",
          backgroundImage: theme.palette.background.gradient,
          color: theme.palette.text.primary,
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          component={motion.div}
          initial="initial"
          animate="animate"
          variants={glitchTextVariants}
          sx={{ color: theme.palette.text.secondary }}
        >
          Menu de Níveis
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button
            variant="contained"
            onClick={() => handleNavigate("/start")}
            component={motion.div}
            initial="initial"
            animate="animate"
            variants={glitchButtonVariants}
          >
            Nível 1
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNavigate("/game")}
            component={motion.div}
            initial="initial"
            animate="animate"
            variants={glitchButtonVariants}
            disabled={currentDate < unlockDate}
            sx={{
              ...(currentDate < unlockDate && {
                backgroundColor: "#555555",
                color: "#999999",
                border: "1px solid #888888",
                boxShadow: "0px 0px 10px rgba(136, 136, 136, 0.5)",
              }),
            }}
          >
            Nível 2
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNavigate("/reveal")}
            component={motion.div}
            initial="initial"
            animate="animate"
            variants={glitchButtonVariants}
            disabled={currentDate < unlockDate}
            sx={{
              ...(currentDate < unlockDate && {
                backgroundColor: "#555555",
                color: "#999999",
                border: "1px solid #888888",
                boxShadow: "0px 0px 10px rgba(136, 136, 136, 0.5)",
              }),
            }}
          >
            Nível 3
          </Button>
        </Box>
        {currentDate < unlockDate && (
          <Typography
            variant="body1"
            mt={3}
            component={motion.div}
            initial="initial"
            animate="animate"
            variants={glitchTextVariants}
            sx={{ color: theme.palette.text.secondary }}
          >
            Níveis 2 e 3 serão desbloqueados após{" "}
            {unlockDate.toLocaleDateString()}.
          </Typography>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Menu;
