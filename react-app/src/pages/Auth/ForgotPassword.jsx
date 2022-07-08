import React from "react";
import Forgot from "../../assets/img/forgotpassword.svg";
import "../../style/auth.css";
const ForgotPassword = () => {
  return (
    <div className="sc-forgot-password">
      <div className="sc-forgot-content">
        <h2 className="mb-2 fz:16 text-dark">Forgot Your Password?</h2>
        <p className="mb-1 fz:14 text-dark">
          Enter your registered email below to receive password reset
          instruction
        </p>
        <img src={Forgot} alt="" className="img-forgot" />
        <form action="">
          <div className="input-field">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <button className="sc-SignFx XamWr">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
