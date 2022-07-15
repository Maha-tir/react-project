import React from "react";

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
          <button className="list-btn py-2 fz:14">
            <span className="fw-500 text-dark">Change Password</span>
          </button>
          <button className="list-btn py-2 fz:14">
            <span className="fw-500 text-dark">Modify Email</span>
          </button>
          <button className="list-btn py-2 fz:14">
            <span className="fw-500 text-dark">Security PIN</span>
            <span id="method" className="text-mute fz:12">
              Not Yet Set
            </span>
          </button>
          <button className="list-btn py-2 fz:14">
            <span className="fw-500 text-dark">Google Verification Code</span>
            <span id="method" className="text-mute fz:12">
              Not Yet Set
            </span>
          </button>
          <button className="list-btn py-2 fz:14">
            <span className="fw-500 text-dark">
              Withdrawal Address Management
            </span>
          </button>
          <button className="list-btn py-2 fz:14">
            <span className="fw-500 text-dark">Biometrics & PIN</span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default SecurityCenter;
