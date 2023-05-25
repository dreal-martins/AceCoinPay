import React from "react";
import Logo from "../../assets/AceCoinPayLogo.png";
import TimeComponent from "./Time/Time";
import "./style.css";

function Header() {
  return (
    <div className="header_container">
      <div className="logo_container">
        <img src={Logo} alt="logo" className="logo" />
        <p>
          AceCoin<span>Pay</span>
        </p>
      </div>
      <TimeComponent />
    </div>
  );
}

export default Header;
