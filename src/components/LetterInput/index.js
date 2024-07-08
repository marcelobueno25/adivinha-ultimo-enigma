import React, { forwardRef } from "react";
import { TextField } from "@mui/material";
import { pink } from "@mui/material/colors";

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
            margin: "0 2px",
            fontSize: "1.5rem",
            fontFamily: "Cursive, Arial",
            color: pink[700],
            borderRadius: "8px",
            outline: "none",
            width: "2ch",
            height: "2ch",
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
              borderColor: pink[300],
            },
            "&:hover fieldset": {
              borderColor: pink[500],
            },
            "&.Mui-focused fieldset": {
              borderColor: pink[700],
            },
            color: "white",
          },
          "& .Mui-disabled": {
            WebkitTextFillColor: pink[300],
            backgroundColor: pink[300],
            cursor: "default",
          },
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: pink[300],
            backgroundColor: pink[300],
          },
        }}
      />
    );
  }
);

export default LetterInput;
