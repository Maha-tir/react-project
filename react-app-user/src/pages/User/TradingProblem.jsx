import React from "react";
import { Link } from "react-router-dom";

const TradingProblem = () => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Give Feedback</span>
      </header>
      <div className="dbhs-content">
        <ul className="list-group">
          <li className="list-btn py-2 fz:14 d-flex aic jcb bg-primary:30 border-primary:70">
            <span className="fw-500 text-dark">Feedback type</span>
            <span className="fw-500 text-dark">Trading Problem</span>
          </li>

          <div className="input-group mt-3">
            <label className="input-label fw-600 text-dark">Order ID</label>
            <div className="input-field not-icon mt-0">
              <input
                type="text"
                id="order-id"
                placeholder="Enter The Order Number Here"
                className="input-control input-control-md bg-primary:20 border-primary:70"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label className="input-label fw-600 text-dark">Exchange</label>
            <div className="input-field not-icon mt-0">
              <input
                type="text"
                id="exchange"
                placeholder="Select An Exchange"
                className="input-control input-control-md bg-primary:20 border-primary:70"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label className="input-label fw-600 text-dark">Trading Pair</label>
            <div className="input-field not-icon mt-0">
              <input
                type="text"
                id="order-id"
                placeholder="Enter the currency of the transaction pari problem"
                className="input-control input-control-md bg-primary:20 border-primary:70"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label className="input-label fw-600 text-dark">
              Spesifica problem description
            </label>
            <div className="input-field not-icon mt-0">
              <textarea
                class="textarea-control textarea-control-md bg-primary:20 border-primary:70"
                id="exampleFormControlTextarea1"
                placeholder="Enter a detailed description of the problem your are encountering"
              ></textarea>
            </div>
          </div>

          <div className="d-flex aic jcc">
            <button
              className="sc-sign-btn text-uppercase px-5 fz:13 py-1"
              style={{ width: "auto" }}
            >
              Submit
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default TradingProblem;
