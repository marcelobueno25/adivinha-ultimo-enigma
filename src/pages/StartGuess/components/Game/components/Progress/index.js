import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import { motion } from "framer-motion";

const Progress = ({ currentWordIndex, wordsList }) => {
  return (
    <Box width="100%" maxWidth="600px" mb={10}>
      <Stepper activeStep={currentWordIndex} alternativeLabel>
        {wordsList.map((wordObj, index) => (
          <Step key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <StepLabel></StepLabel>
            </motion.div>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Progress;
