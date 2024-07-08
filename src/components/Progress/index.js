// src/components/WordProgress.js
import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

const Progress = ({ currentWordIndex, wordsList }) => {
  return (
    <Box width="100%" maxWidth="600px" mb={10}>
      <Stepper activeStep={currentWordIndex} alternativeLabel>
        {wordsList.map((wordObj, index) => (
          <Step key={index}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Progress;
