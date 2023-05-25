import React from "react";
import TicktLogo from "../../assets/ticketLogo.png";
import { GrWifi, GrApple } from "react-icons/gr";
import { BiReceipt } from "react-icons/bi";
import MicroChip from "../../assets/MicroChip.png";
import MasterCard from "../../assets/MasterCardLogo_2.png";
import "./style.css";

const CardDetails = () => {
  return (
    <div className="card_details_container">
      <div className="card_details_ticket_img_container">
        <img src={TicktLogo} alt="ticketLogo" />
      </div>
      <div className="card_details_atm_card_container">
        <div className="card_details_atm_card_subcontainer">
          <img
            src={MicroChip}
            alt="Chip"
            className="card_details_atm_card_microchip"
          />
          <GrWifi className="card_details_atm_card_icon" />
        </div>
        <div className="card_details_atm_card_second_container">
          <h3>Jonathan Micheal</h3>
          <h2>
            °°°° <span>3456</span>
          </h2>
        </div>
        <div className="card_details_atm_card_last_container">
          <h2>09/22</h2>
          <img
            src={MasterCard}
            alt="MasterCardLogo"
            className="card_details_atm_card_last_img"
          />
        </div>
      </div>
      <div className="card_details_product_details_container">
        <div className="card_details_product_details">
          <h2>Company</h2>
          <h3>
            <GrApple /> Apple
          </h3>
        </div>
        <div className="card_details_product_details">
          <h2>Order Number</h2>
          <h3>126201</h3>
        </div>
        <div className="card_details_product_details">
          <h2>Product</h2>
          <h3>MacBook Air</h3>
        </div>
        <div className="card_details_product_details">
          <h2>VAT(20%)</h2>
          <h3>$100.00</h3>
        </div>
      </div>
      <div className="card_details_total_container">
        <div className="card_details_total_subcontainer">
          <p>You have to Pay:</p>
          <div className="card_details_total_amout">
            <h2>
              549<span>.99</span>
            </h2>
            <h3>USD</h3>
          </div>
        </div>
        <BiReceipt className="card_details_total_icon" />
      </div>
      <div className="card_details_flip_card"></div>
    </div>
  );
};

export default CardDetails;
