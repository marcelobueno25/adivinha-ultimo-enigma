import React, { forwardRef } from "react";
import { TextField } from "@mui/material";

const LetterInput = forwardRef(
  ({ index, value, onKeyPress, onChange, onKeyUp, disabled }, ref) => {
    const handleChange = (e) => {
      const newValue = e.target.value;
      if (/^[A-Za-z]$/.test(newValue) || newValue === "") {
        onChange(newValue, index);
      }
    };

    return (
      <TextField
        inputRef={ref}
        variant="outlined"
        inputProps={{
          maxLength: 1,
          style: {
            textAlign: "center",
            fontSize: "24px",
            width: "40px",
            height: "40px",
          },
        }}
        value={value}
        onChange={handleChange}
        onKeyUp={(e) => onKeyUp(e, index)}
        onFocus={(e) => e.target.select()}
        onKeyPress={(e) => onKeyPress(e, index)}
        disabled={disabled}
        sx={{
          m: 0.5,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
            backgroundColor: "black",
            color: "white",
          },
          "& .Mui-disabled": {
            backgroundColor: "gray",
            cursor: "default",
          },
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "white",
          },
        }}
      />
    );
  }
);

export default LetterInput;
