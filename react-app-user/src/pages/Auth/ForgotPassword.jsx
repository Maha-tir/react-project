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
        <span className="text-uppercase fw-500 me-auto">Verify your Email</span>
      </header>
      <div className="d-flex align-items-center justify-content-center flex-column mt-4">
        <h2 className="sttr-text fz:20 mb-2 text-center w:text-center">
          Forgot your password?
        </h2>
        <p className="fz:14 text-center w:text-center text-mute">
          Enter your registered email below to receive password reset
          instruction
        </p>
      </div>
      <form action="" className="form-validation">
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
          Send Email Verification
        </button>
        <div className="my-2 text-center">
          <p className="fz:15 text-mute fw-500">
            Remember password?
            <Link to="/auth/signin" className="text-link fz:14 ms-1">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
