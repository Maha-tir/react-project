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
      </header>{" "}
      <div className="d-flex align-items-center flex-column mt-4">
        <h2 className="sttr-text fz:20">Set New Password</h2>
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
        <button className="sc-sign-btn text-uppercase">Set New Password</button>
      </form>
    </div>
  );
};

export default SetNewPassword;
