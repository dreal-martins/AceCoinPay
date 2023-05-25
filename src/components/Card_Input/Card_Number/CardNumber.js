import React, { useState } from "react";
import MasterCardLogo from ".././../../assets/MasterCardLogo_1.png";
import Verified from "../../../assets/Verified.png";
import "./style.css";

const CardNumber = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const formattedValue = formatInputValue(value);
    setInputValue(formattedValue);
  };

  const formatInputValue = (value) => {
    const numericValue = value.replace(/\D/g, "");
    const groups = numericValue.match(/.{1,4}/g);
    const formattedValue = groups ? groups.join("-") : "";
    return formattedValue;
  };

  return (
    <div className="card_number_input_container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="2412 - 7512 - 3412 - 3456"
        maxLength={19}
        className="card_number_input"
      />
      <div>
        <img
          src={MasterCardLogo}
          alt="mastercardlogo"
          className="mastercardlogo"
        />
        {inputValue.length >= 19 ? (
          <img src={Verified} alt="verified" className="verified_img" />
        ) : null}
      </div>
    </div>
  );
};

export default CardNumber;
