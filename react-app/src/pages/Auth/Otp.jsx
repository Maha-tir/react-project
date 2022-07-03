import React, { useState } from "react";
import { Link } from "react-router-dom";
import OTPImage from "../../assets/img/Enter-OTP.svg";
import "../../style/auth.css";

const Otp = () => {
  const PARENTAL_PIN_LENGTH = 4;
  return (
    <div className="full-width">
      <div className="sc-HxVwr">
        <div className="sc-content">
          <h2>Enter verification code</h2>
          <p>We have just sent a verification code to mahatir@gmail.com</p>
          <form action="" className="otp-form">
            <div className="otp-group">
              <input type="text" maxLength="1" className="otp-input" />
              <input type="text" maxLength="1" className="otp-input" />
              <input type="text" maxLength="1" className="otp-input" />
              <input type="text" maxLength="1" className="otp-input" />
            </div>
            <Link className="send-code">Send the code again</Link>
            <button type="submit" className="sch-Vrfcd">
              Verify
            </button>
          </form>
        </div>
      </div>
      <div className="sc-HxVxr">
        <div className="sc-image">
          <img src={OTPImage} alt="_otp-image" />
        </div>
      </div>
    </div>
  );
};

export default Otp;
