import React from "react";

const SecurityPin = () => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Security Pin</span>
      </header>
      <div className="dbhs-content">
        <div className="input-group">
          <div className="input-field not-icon mt-0">
            <input
              type="text"
              placeholder="Please enter a 6 - digit PIN"
              className="input-control"
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-field not-icon mt-0">
            <input
              type="text"
              placeholder="Re-enter a 6 - digit PIN"
              className="input-control"
              required
            />
          </div>
        </div>
        <div className="input-group">
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

export default SecurityPin;
