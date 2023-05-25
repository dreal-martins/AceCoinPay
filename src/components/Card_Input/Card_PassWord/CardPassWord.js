import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./style.css";

const CardPassWord = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="card_password_container">
      <div className="card_password_text">
        <h2>Password</h2>
        <p>Enter your Dynamic password</p>
      </div>

      <div>
        <div className="card_password_input_container">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
            className="card_password_input"
          />
        </div>

        <div className="showPasswordIcon">
          {showPassword ? (
            <FaRegEyeSlash onClick={togglePasswordVisibility} />
          ) : (
            <FaRegEye onClick={togglePasswordVisibility} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPassWord;
