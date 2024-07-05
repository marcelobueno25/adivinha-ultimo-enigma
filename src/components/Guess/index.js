import React, { useState, useEffect, useRef } from "react";
import LetterInput from "../LetterInput";

const wordsList = ["EU TE AMO", "LAAJA", "REACT", "JAVASCRIPT", "CODING"];

const Guess = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letters, setLetters] = useState([]);
  const [message, setMessage] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    const word = wordsList[currentWordIndex];
    const lettersArray = Array(word.length).fill("");
    setLetters(lettersArray);
    inputRefs.current = inputRefs.current.slice(0, lettersArray.length);
  }, [currentWordIndex]);

  const handleChange = (value, index) => {
    const newLetters = [...letters];
    newLetters[index] = value.toUpperCase();
    setLetters(newLetters);

    if (value && index < inputRefs.current.length - 1) {
      if (wordsList[currentWordIndex][index + 1] === " ") {
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
      if (wordsList[currentWordIndex][index - 1] === " ") {
        inputRefs.current[index - 2]?.focus();
        inputRefs.current[index - 2]?.select();
      } else {
        inputRefs.current[index - 1]?.focus();
        inputRefs.current[index - 1]?.select();
      }
    }
  };

  const handleSubmit = () => {
    const currentWord = wordsList[currentWordIndex].split("");
    const isCorrect = currentWord.every(
      (letter, index) => letter === " " || letter === letters[index]
    );
    if (isCorrect) {
      setMessage("Correto!");
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsList.length);
    } else {
      setMessage("Incorreto. Tente novamente.");
    }
  };
  return (
    <>
      <div className="input-container">
        {wordsList[currentWordIndex].split("").map((letter, index) => (
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
      </div>
      <button onClick={handleSubmit}>OK</button>
      {message && <p>{message}</p>}
    </>
  );
};

export default Guess;
