import React from "react";
import { Link } from "react-router-dom";
const HelpSupport = () => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Help & Support</span>
      </header>
      <div className="dbhs-content">
        <div className="nav-card-all mb-3">
          <div className="card">
            <Link to="/user/trading-problem" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon"></div>
                <span className="fz:13 fw-500 text-center text-dark">
                  Trading Problem
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/trading-problem" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon"></div>
                <span className="fz:13 fw-500 text-center text-dark">
                  Account Problem
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/trading-problem" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon"></div>
                <span className="fz:13 fw-500 text-center text-dark">
                  Money Flow Problem
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/trading-problem" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon"></div>
                <span className="fz:13 fw-500 text-center text-dark">
                  BUG Problem
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/trading-problem" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon"></div>
                <span className="fz:13 fw-500 text-center text-dark">
                  Suggestions / Oppinions
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/trading-problem" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon"></div>
                <span className="fz:13 fw-500 text-center text-dark">
                  API Binding Isues
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/trading-problem" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon"></div>
                <span className="fz:13 fw-500 text-center text-dark">
                  Report Violations
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/trading-problem" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon"></div>
                <span className="fz:13 fw-500 text-center text-dark">
                  Other
                </span>
              </div>
            </Link>
          </div>
        </div>
        <button className="sc-sign-btn text-uppercase">Feedback Record</button>
      </div>
    </div>
  );
};

export default HelpSupport;
