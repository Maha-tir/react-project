import React from "react";
import { Link } from "react-router-dom";
const Transfer = () => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sc-dbhs-p">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Transfer</span>
      </header>
      <div className="dbhs-content">
        <form action="">
          <div className="dbhs-p mb-2">
            <div className="input-group">
              <div className="input-field not-icon">
                <input
                  type="text"
                  id="chain"
                  placeholder="Chain :"
                  className="input-control"
                  required
                />
              </div>
            </div>
          </div>
          <div className="bg-primary:50 dbhs-p py-3">
            <div className="input-group">
              <label className="input-label">Receiving Account</label>
              <div className="input-field not-icon">
                <input
                  type="text"
                  id="receiving-account"
                  placeholder="Receiving Account"
                  className="input-control"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Transfer Quantity</label>
              <div className="input-field not-icon">
                <input
                  type="text"
                  id="transfer-quantity"
                  placeholder="The minimum Transfer 10 USDT"
                  className="input-control"
                  required
                />
              </div>
              <p className="mt-1 mb-1 fz:14 fw-500 text-mute sttr-text">
                Available : 888.12345678 USDT
              </p>
              <div className="nav jcb flex-wrap">
                <p className="m-0 fz:14 fw-500 text-dark">Arrival Quantity</p>
                <p className="m-0 fz:14 fw-500 text-dark">886.12345678 USDT</p>
              </div>
            </div>
          </div>
          <div className="dbhs-p py-3">
            <div className="input-group">
              <label className="input-label">OTP Email</label>
              <div className="input-field not-icon w-btn">
                <input
                  type="text"
                  id="otp-email"
                  placeholder="OTP Email"
                  className="input-control"
                  required
                />
                <button className="input-btn-absolute get-otp text-uppercase">
                  Get OTP
                </button>
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Security PIN</label>
              <div className="input-field not-icon">
                <input
                  type="text"
                  id="transaction-password"
                  placeholder="Security PIN"
                  className="input-control"
                  required
                />
              </div>
              <div className="nav jce">
                <Link className="text-link fz:12 my-2 fw-500">
                  Set / Change Transaction Password
                </Link>
              </div>
            </div>

            <button className="sc-sign-btn text-uppercase">
              Confirm Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transfer;
