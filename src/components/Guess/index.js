import React, { useState, useEffect, useRef } from "react";
import LetterInput from "../LetterInput";
import { Box, Button, Typography, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Progress from "../Progress";
import CongratulationsModal from "../CongratulationsModal";

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

const wordsList = [
  {
    word: "DISNEY",
    hint: "Enigma 2",
  },
  {
    word: "GATO",
    hint: "Enigma 1",
  },
  {
    word: "MARIE",
    hint: "Secreto",
  },
];

const App = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letters, setLetters] = useState([]);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    const word = wordsList[currentWordIndex].word;
    const lettersArray = Array(word.length).fill("");
    setLetters(lettersArray);
    inputRefs.current = inputRefs.current.slice(0, lettersArray.length);
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [currentWordIndex]);

  const handleChange = (value, index) => {
    const newLetters = [...letters];
    newLetters[index] = value.toUpperCase();
    setLetters(newLetters);

    if (value && index < inputRefs.current.length - 1) {
      if (wordsList[currentWordIndex].word[index + 1] === " ") {
        inputRefs.current[index + 2]?.focus();
        inputRefs.current[index + 2]?.select();
      } else {
        inputRefs.current[index + 1]?.focus();
        inputRefs.current[index + 1]?.select();
      }
    }
  };

  const handleKeyUp = (e, index) => {
    if (e.key === "Backspace" && index > 0) {
      if (wordsList[currentWordIndex].word[index - 1] === " ") {
        inputRefs.current[index - 2]?.focus();
        inputRefs.current[index - 2]?.select();
      } else {
        inputRefs.current[index - 1]?.focus();
        inputRefs.current[index - 1]?.select();
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const currentWord = wordsList[currentWordIndex].word.split("");
    const isCorrect = currentWord.every(
      (letter, index) => letter === " " || letter === letters[index]
    );
    if (isCorrect) {
      setMessage("Correto!");
      if (currentWordIndex + 1 === wordsList.length) {
        setOpen(true);
      } else {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsList.length);
      }
    } else {
      setMessage("Incorreto. Tente novamente.");
      const word = wordsList[currentWordIndex].word;
      const lettersArray = Array(word.length).fill("");
      setLetters(lettersArray);
      inputRefs.current[0]?.focus();
    }
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentWordIndex(0);
    setMessage("");
    const word = wordsList[0].word;
    const lettersArray = Array(word.length).fill("");
    setLetters(lettersArray);
    inputRefs.current[0]?.focus();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor="#ffe4e1"
        color="#4b2e83"
        p={2}
        sx={{ textAlign: "center" }}
      >
        <Progress currentWordIndex={currentWordIndex} wordsList={wordsList} />
        <Typography variant="h5" gutterBottom>
          💖 Dica: {wordsList[currentWordIndex].hint} 💖
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center" mb={2}>
          {wordsList[currentWordIndex].word.split("").map((letter, index) => (
            <LetterInput
              key={index}
              index={index}
              value={letter === " " ? " " : letters[index]}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              onKeyPress={handleKeyPress}
              ref={(el) => (inputRefs.current[index] = el)}
              disabled={letter === " "}
            />
          ))}
        </Box>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          OK
        </Button>
        {message && (
          <Typography variant="h6" mt={2}>
            {message}
          </Typography>
        )}
      </Box>
      <CongratulationsModal open={open} onClose={handleClose} />
    </ThemeProvider>
  );
};

export default App;
