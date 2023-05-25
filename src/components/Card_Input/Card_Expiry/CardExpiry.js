import React, { useState } from "react";
import "./style.css";

const CardExpiry = () => {
  const [inputValueMonth, setInputValueMonth] = useState("");
  const [inputValueYear, setInputValueYear] = useState("");

  const handleChangeMonth = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, "");
    const truncatedValue = numericValue.slice(0, 2);
    setInputValueMonth(truncatedValue);
  };
  const handleChangeYear = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, "");
    const truncatedValue = numericValue.slice(0, 4);
    setInputValueYear(truncatedValue);
  };

  return (
    <div className="expiry_date_container">
      <div className="expiry_date_text">
        <h2>Expiry Date</h2>
        <p>Enter the expiration date on the card</p>
      </div>
      <div className="expiry_date_input_container">
        <div>
          <input
            type="text"
            value={inputValueMonth}
            onChange={handleChangeMonth}
            placeholder="09"
            className="expiry_date_input"
          />
        </div>
        <p className="expiry_date_input_text" style={{ color: "black" }}>
          /
        </p>
        <div>
          <input
            type="text"
            value={inputValueYear}
            onChange={handleChangeYear}
            placeholder="2025"
            className="expiry_date_input"
          />
        </div>
      </div>
    </div>
  );
};

export default CardExpiry;
