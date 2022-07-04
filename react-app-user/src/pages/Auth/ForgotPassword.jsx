import React from "react";
import { Link, useHistory } from "react-router-dom";
import sendImage from "../../assets/img/send-email.svg";
const ForgotPassword = () => {
  const history = useHistory();

  const backToLogin = () => {
    history.push("/signin");
  };
  return (
    <div className="sc-forgot-with-header">
      <header className="or-header">
        <button className="back-button" onClick={backToLogin}>
          <i class="fa-solid fa-angle-left back-icon"></i>
        </button>
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
      <div className="sc-forgot-img">
        <img src={sendImage} alt="_sendImage" />
      </div>
      <form action="" className="form-validation">
        <div className="input-group">
          <div className="input-field">
            <input
              type="text"
              id="email"
              placeholder="example@gmail.com"
              className="input-control"
              required
            />
            <i class="fa-regular fa-user input-icon"></i>
          </div>
        </div>
        <button className="sc-sign-btn">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
