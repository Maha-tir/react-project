import React from "react";
import { Link } from "react-router-dom";
const Setting = () => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Setting</span>
      </header>
      <div className="dbhs-content">
        <ul className="list-group">
          <button className="list-btn fz:14">
            <span className="fw-500 text-dark">Valuation Method</span>
            <span id="method" className="text-mute fz:12">
              IDR
            </span>
          </button>
          <button className="list-btn fz:14">
            <span className="fw-500 text-dark">Language</span>
            <span id="method" className="text-mute fz:12">
              English
            </span>
          </button>
          <button className="list-btn fz:14">
            <span className="fw-500 text-dark">Clear Cache</span>
            <span id="method" className="text-mute fz:12">
              0.00 Mb
            </span>
          </button>
          <button className="list-btn fz:14">
            <span className="fw-500 text-dark">About Bidbox</span>
          </button>

          <button className="sc-sign-btn text-uppercase mt-3">Logout</button>
        </ul>
      </div>
    </div>
  );
};

export default Setting;
