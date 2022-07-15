import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/auth.css";
const SetNewPassword = () => {
  return (
    <div className="sc-forgot-with-header">
      <header className="or-header">
        <a href="/forgot-password" className="back-button me-auto">
          <i className="fa-solid fa-angle-left back-icon"></i>
        </a>
        <span className="text-uppercase fw-500 me-auto">
          Create New Password
        </span>
      </header>
      <div className="d-flex align-items-center justify-content-center flex-column mt-5">
        <div className="icon-lg mb-3">
          <i className="fa-solid fa-lock"></i>
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <p className="fz:14 text-center w:text-center text-mute">
          Your new password must be different from previously used password
        </p>
      </div>
      <form className="form-validation pt-1">
        <div className="input-group mb-1">
          <div className="input-field not-icon">
            <input
              type="password"
              id="password"
              placeholder="New Password"
              className="input-control"
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-field not-icon">
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm New password"
              className="input-control"
              required
            />
          </div>
        </div>
        <button className="sc-sign-btn">Set New Password</button>
      </form>
    </div>
  );
};

export default SetNewPassword;
