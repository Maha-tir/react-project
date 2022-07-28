import React from "react";

const ModifyEmail = () => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Modify Email</span>
      </header>
      <div className="dbhs-content">
        <h2 className="fz:17 fw-600 text-dark mb-2">
          New email address verification
        </h2>
        <div className="input-group">
          <label className="input-label">New email address</label>
          <div className="input-field not-icon mt-0">
            <input
              type="text"
              placeholder="Input New Email"
              className="input-control"
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">New email verification code</label>
          <div className="input-field not-icon mt-0">
            <input
              type="text"
              id="order-id"
              placeholder="Input Email Verification Code"
              className="input-control"
              required
            />
            <button
              type="button"
              className="btn-input-absolute fz:13 px-3 text-dark border-none bg-gray fw:300 text-uppercase me-1"
              style={{ height: "27px" }}
            >
              Send
            </button>
          </div>
        </div>

        <h2 className="fz:17 fw-600 text-dark mb-1 mt-4">
          Safety verification
        </h2>
        <div className="input-group">
          <label className="input-label">Email verification code</label>
          <div className="input-field not-icon mt-0">
            <input
              type="text"
              id="order-id"
              placeholder="Input Email Verification Code"
              className="input-control"
              required
            />
            <button
              type="button"
              className="btn-input-absolute fz:13 px-3 text-dark border-none bg-gray fw:300 text-uppercase me-1"
              style={{ height: "27px" }}
            >
              Send
            </button>
          </div>
        </div>

        <div className="mt-2">
          <button className="sc-sign-btn text-uppercase mt-3">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ModifyEmail;
