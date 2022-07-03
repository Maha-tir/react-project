import React, { useState } from "react";
import { Link } from "react-router-dom";

const Otp = () => {
  const PARENTAL_PIN_LENGTH = 4;

  return (
    <div className="full-width">
      <div className="sc-HxVwr">
        <div className="sc-content">
          <h2>Enter verification code</h2>
          <p>
            We have just sent a verification code to mahatir@gmail.com and +62
            891-2345-6789
          </p>
          <form action="">
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
      <div className="sc-HxVxr"></div>
    </div>
  );
};

export default Otp;
