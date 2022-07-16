import React from "react";
import { Link, useHistory } from "react-router-dom";
import sendImage from "../../assets/img/send-email.svg";
import "../../styles/auth.css";

const ForgotPassword = () => {
  const history = useHistory();

  const backToLogin = () => {
    history.push("/auth/signin");
  };

  const SetPassword = () => {
    history.push("/auth/set-new-password");
  };

  return (
    <div className="sc-forgot-with-header">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backToLogin}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
      </header>
      <div className="d-flex align-items-center flex-column mt-4">
        <h2 className="sttr-text fz:20">Reset Password</h2>
      </div>
      <form action="" className="form-validation pt-2">
        <div className="input-group">
          <div className="input-field not-icon">
            <input
              type="text"
              id="email"
              placeholder="example@gmail.com"
              className="input-control"
              required
            />
          </div>
        </div>
        <button className="sc-sign-btn" onClick={SetPassword}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
