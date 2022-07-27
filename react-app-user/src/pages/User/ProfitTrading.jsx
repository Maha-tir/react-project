import React from "react";
import { Link } from "react-router-dom";

const ProfitTrading = () => {
  const backHistory = () => {
    window.history.back();
  };

  const profitList = [
    {
      id: 1,
      date: "01-07-2022",
      total: "0.12345 USDT",
    },
    {
      id: 2,
      date: "01-07-2022",
      total: "0.12345 USDT",
    },
  ];

  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Profit Trading</span>
      </header>
      <div className="dbhs-content-lg">
        <div className="card mb-2">
          <div className="card-height-lg bg-first">
            <div className="card-body row h:100">
              <div className="box-grid:2">
                <div className="nav nav-column">
                  <p className="m-0 fz:15 fw-600 text-dark">Today Profit</p>
                  <h2 className="m-0 fz:17 fw-600 text-white">222 USDT</h2>
                  <p className="m-0 fz:11 text-white">= 3.210.000 IDR</p>
                </div>
                <div className="nav nav-column">
                  <p className="m-0 fz:15 fw-600 text-dark text-center">
                    Cumulative Profit
                  </p>
                  <h2 className="m-0 fz:17 fw-600 text-white text-center">
                    222 USDT
                  </h2>
                  <p className="m-0 fz:11 text-white text-center">
                    = 3.210.000 IDR
                  </p>
                </div>
              </div>
              <p className="fz:14 text-center w:100 text-white mb-0 mt-2">
                Data within 24 hours might not be real time.
              </p>
              <p className="fz:14 text-center w:100 text-white m-0">
                Data is shown under Singapore time. (UTC+8)
              </p>
            </div>
          </div>
        </div>
        <ul className="list-group">
          {profitList.map((profit, index) => (
            <button className="list-btn jcb py-2 fz:14" key={index}>
              <span className="fw-500 text-dark fz:11">{profit.date}</span>
              <div className="nav nav-column jcc aic">
                <span className="fw-600 text-dark fz:12">{profit.total}</span>
                <span className="fz:11 fw-500 text-dark">Profit</span>
              </div>
              <i className="fa-solid fa-angle-down"></i>
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfitTrading;
