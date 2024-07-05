import React, { useState, useEffect, useRef } from "react";
import LetterInput from "../LetterInput";
import { Box, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const wordsList = [
  { word: "EU TE AMO", hint: "Uma expressão romântica em português" },
  { word: "LAAJA", hint: "Uma palavra em outra língua" },
  {
    word: "REACT",
    hint: "Uma biblioteca JavaScript para construir interfaces de usuário",
  },
  { word: "JAVASCRIPT", hint: "A linguagem de programação do navegador" },
  { word: "CODING", hint: "O que você está fazendo agora" },
];

const App = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letters, setLetters] = useState([]);
  const [message, setMessage] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    const word = wordsList[currentWordIndex].word;
    const lettersArray = Array(word.length).fill("");
    setLetters(lettersArray);
    inputRefs.current = inputRefs.current.slice(0, lettersArray.length);
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

  const handleSubmit = () => {
    const currentWord = wordsList[currentWordIndex].word.split("");
    const isCorrect = currentWord.every(
      (letter, index) => letter === " " || letter === letters[index]
    );
    if (isCorrect) {
      setMessage("Correto!");
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsList.length);
    } else {
      setMessage("Incorreto. Tente novamente.");
      const word = wordsList[currentWordIndex].word;
      const lettersArray = Array(word.length).fill("");
      setLetters(lettersArray);
      inputRefs.current[0]?.focus();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor="#333"
        color="white"
        p={2}
        sx={{ textAlign: "center" }}
      >
        <Typography variant="h5" gutterBottom>
          Dica: {wordsList[currentWordIndex].hint}
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center" mb={2}>
          {wordsList[currentWordIndex].word.split("").map((letter, index) => (
            <LetterInput
              key={index}
              index={index}
              value={letter === " " ? " " : letters[index]}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
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
    </ThemeProvider>
  );
};

export default App;
