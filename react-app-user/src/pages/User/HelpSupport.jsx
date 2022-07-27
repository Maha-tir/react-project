import React from "react";
import { Link } from "react-router-dom";

import TradingProblem from "../../assets/img/Trading-problem.png";
import AccountProblem from "../../assets/img/Accountproblem.png";
import MoneyFlowProblem from "../../assets/img/Moneyflow.png";
import BUGProblem from "../../assets/img/bug.png";
import SuggestionsOppinions from "../../assets/img/suggest.png";
import APIBinding from "../../assets/img/apibind.png";
import ReportViolations from "../../assets/img/report.png";
import Other from "../../assets/img/other.png";

const HelpSupport = () => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon-help-center"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Help & Support</span>
      </header>
      <div className="dbhs-content">
        <div className="nav-card-all mb-3">
          <div className="card">
            <Link to="/user/trading-problem" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon-help-center">
                  <img src={TradingProblem} alt="_trading-problem" />
                </div>
                <span className="fz:12 fw-500 text-center text-dark">
                  Trading Problem
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/account-problem" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon-help-center">
                  <img src={AccountProblem} alt="_account-problem" />
                </div>
                <span className="fz:12 fw-500 text-center text-dark">
                  Account Problem
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/money-flow-problem" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon-help-center">
                  <img src={MoneyFlowProblem} alt="_money-flow-problem" />
                </div>
                <span className="fz:12 fw-500 text-center text-dark">
                  Money Flow Problem
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/bug-problem" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon-help-center">
                  <img src={BUGProblem} alt="_bug-problem" />
                </div>
                <span className="fz:12 fw-500 text-center text-dark">
                  BUG Problem
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/suggestions-options" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon-help-center">
                  <img
                    src={SuggestionsOppinions}
                    alt="_suggestions/oppinions"
                  />
                </div>
                <span className="fz:12 fw-500 text-center text-dark">
                  Suggestions / Oppinions
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/api-binding-issues" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon-help-center">
                  <img src={APIBinding} alt="_api-binding-isues" />
                </div>
                <span className="fz:12 fw-500 text-center text-dark">
                  API Binding Isues
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/report-violations" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon-help-center">
                  <img src={ReportViolations} alt="_report-violations" />
                </div>
                <span className="fz:12 fw-500 text-center text-dark">
                  Report Violations
                </span>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/user/other" className="card-body tdn">
              <div className="nav flex-column">
                <div className="icon-help-center">
                  <img src={Other} alt="_other" />
                </div>
                <span className="fz:12 fw-500 text-center text-dark">
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
