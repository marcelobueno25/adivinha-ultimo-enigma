import React, { forwardRef } from "react";
import "./styles.scss";

const LetterInput = forwardRef(
  ({ index, value, onChange, onKeyUp, disabled }, ref) => {
    const handleChange = (e) => {
      const newValue = e.target.value;
      if (/^[A-Za-z]$/.test(newValue) || newValue === "") {
        onChange(newValue, index);
      }
    };

    return (
      <input
        ref={ref}
        type="text"
        maxLength="1"
        value={value}
        onChange={handleChange}
        onKeyUp={(e) => onKeyUp(e, index)}
        onFocus={(e) => e.target.select()}
        className="letter-input"
        disabled={disabled}
      />
    );
  }
);

export default LetterInput;
