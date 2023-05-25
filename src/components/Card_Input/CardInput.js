import React from "react";
import { ImPencil } from "react-icons/im";
import "./style.css";
import CardNumber from "./Card_Number/CardNumber";
import CardCvvInput from "./Card_Cvv_input/CardCvvInput";
import CardExpiry from "./Card_Expiry/CardExpiry";
import CardPassWord from "./Card_PassWord/CardPassWord";

const CardInput = () => {
  return (
    <>
      <div className="card_input_container">
        <div className="card_input_header_left">
          <h2>card number</h2>
          <p>Enter the 16 digit card number on the card</p>
        </div>
        <div className="card_input_header_right">
          <ImPencil />
          <h3>Edit</h3>
        </div>
      </div>
      <CardNumber />
      <CardCvvInput />
      <CardExpiry />
      <CardPassWord />
    </>
  );
};

export default CardInput;
