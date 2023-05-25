import React, { useState } from "react";
import { TbGridDots } from "react-icons/tb";

import "./style.css";

const CardCvvInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, "");
    const truncatedValue = numericValue.slice(0, 4);
    setInputValue(truncatedValue);
  };

  return (
    <div className="card_cvv_container">
      <div className="card_cvv_text">
        <h2>CVV Number</h2>
        <p>Enter the 3 digit number on the card</p>
      </div>
      <div className="card_cvv_input_container">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter three digits"
          className="card_cvv_input"
        />
        <div>
          {inputValue.length >= 3 ? (
            <TbGridDots className="card_cvv_input_logo_right" />
          ) : (
            <TbGridDots className="card_cvv_input_logo_wrong" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardCvvInput;
