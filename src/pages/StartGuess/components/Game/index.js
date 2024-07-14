import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Progress from "./components/Progress";
import LetterInput from "./components/LetterInput";
import Modal from "../../../../components/Modal";
import Confetti from "react-confetti";
import "./styles.scss";

const wordsList = [
  {
    word: "GATA",
    hint: "Enigma 1",
  },
  {
    word: "DISNEY",
    hint: "Enigma 2",
  },
  {
    word: "MARIE",
    hint: "Com base nesses Enigmas qual o Filme?",
  },
];

const Game = ({ handleNext }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letters, setLetters] = useState([]);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const inputRefs = useRef([]);
  const messageTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current);
      }
    };
  }, []);

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
    const isAllFieldsFilled = letters.every((letter) => letter !== "");
    if (!isAllFieldsFilled) {
      showMessage("Preencha os campos");
      return;
    }

    const currentWord = wordsList[currentWordIndex].word.split("");
    const isCorrect = currentWord.every(
      (letter, index) => letter === " " || letter === letters[index]
    );
    if (isCorrect) {
      showMessage("Correto!");
      if (currentWordIndex + 1 === wordsList.length) {
        setOpen(true);
        //handleNext();
      } else {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsList.length);
      }
    } else {
      showMessage("Incorreto. Tente novamente.");
      const word = wordsList[currentWordIndex].word;
      const lettersArray = Array(word.length).fill("");
      setLetters(lettersArray);
      inputRefs.current[0]?.focus();
    }
  };

  const showMessage = (msg) => {
    setMessage(msg);
    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
    }
    messageTimeoutRef.current = setTimeout(() => {
      setMessage("");
    }, 2000);
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
    <>
      {" "}
      <div className="containerHome">
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
          maxWidth={900}
          borderRadius={10}
          bgcolor="#ffe4e1"
          color="#4b2e83"
          py={8}
          px={3}
          sx={{ textAlign: "center" }}
        >
          <Progress currentWordIndex={currentWordIndex} wordsList={wordsList} />
          <Box mb={2}>
            <Typography variant="h5" gutterBottom>
              {wordsList[currentWordIndex].hint}
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" justifyContent="center" mb={2}>
            {wordsList[currentWordIndex].word.split("").map((letter, index) => (
              <LetterInput
                key={`${currentWordIndex}-${index}`}
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
          <Box my={2}>
            <Button
              className="menu-button primary"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              OK
            </Button>
          </Box>
          <AnimatePresence>
            {message && (
              <Typography
                component={motion.div}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{
                  opacity: { ease: "linear" },
                  y: { ease: "linear" },
                }}
                variant="h6"
                mt={2}
              >
                {message}
              </Typography>
            )}
          </AnimatePresence>
        </Box>

        <Modal open={open} onClose={handleClose} name={""}>
          <Typography id="modal-title" variant="h6" component="h2">
            Parabéns!
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2, mb: 5 }}>
            Você acertou todas as palavras! <br />
            Clique no botão para Descobrir a Presente!
          </Typography>
          <Button
            onClick={handleNext}
            className="menu-button primary"
            variant="contained"
            color="primary"
            size="large"
          >
            Surpresa!
          </Button>
        </Modal>
      </div>
      {open && <Confetti style={{ zIndex: 9999 }} numberOfPieces={100} />}
    </>
  );
};

export default Game;
