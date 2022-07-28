import React from "react";
import { Link } from "react-router-dom";
const SecurityCenter = () => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Security Center</span>
      </header>
      <div className="dbhs-content">
        <ul className="list-group">
          <Link to="/user/change-password" className="list-btn py-2 fz:14">
            <span className="fw-500 text-dark">Change Password</span>
          </Link>
          <Link to="/user/modify-email" className="list-btn py-2 fz:14">
            <span className="fw-500 text-dark">Modify Email</span>
          </Link>
          <Link to="/user/security-pin" className="list-btn py-2 fz:14">
            <span className="fw-500 text-dark">Security PIN</span>
            <span id="method" className="text-mute fz:12">
              Not Yet Set
            </span>
          </Link>
          <Link
            to="/user/google-verification-binding"
            className="list-btn py-2 fz:14"
          >
            <span className="fw-500 text-dark">Google Verification Code</span>
            <span id="method" className="text-mute fz:12">
              Not Yet Set
            </span>
          </Link>
          <Link to="/user/withdrawal-address" className="list-btn py-2 fz:14">
            <span className="fw-500 text-dark">
              Withdrawal Address Management
            </span>
          </Link>
          <Link to="/user/biometrics-pin" className="list-btn py-2 fz:14">
            <span className="fw-500 text-dark">Biometrics & PIN</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SecurityCenter;
