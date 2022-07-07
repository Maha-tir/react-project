import React from "react";
import { Link } from "react-router-dom";
const Trades = () => {
  return (
    <div className="sc-dbhs">
      <div className="dbcontent">
        <div className="card mb-2">
          <div className="card-height-lg"></div>
        </div>

        <div className="card mb-1">
          <div className="card-body">
            <div className="box-grid:2 gap:2 mb-2">
              <div className="nav flex-column">
                <div className="nav aic">
                  <p className="m-0 fz:13" style={{ width: "70px" }}>
                    First Buy :
                  </p>
                  <p className="m-0 fz:13">15 USDT</p>
                </div>
                <div className="nav aic">
                  <p className="m-0 fz:13" style={{ width: "70px" }}>
                    Pair :
                  </p>
                  <p className="m-0 fz:13">1</p>
                </div>
              </div>
              <div className="nav gap:2 jce">
                <button className="btn-control btn-control-sm">On/Off</button>
                <Link
                  to="/user/transaction"
                  className="nav flex-column aic jcc text-dark tdn"
                >
                  <i className="bx bx-book-reader fz:24"></i>
                  <span className="fz:11 fw-600">Transaction</span>
                </Link>
              </div>
            </div>
            <div className="box-grid:2 gap:2">
              <div className="nav aic">
                <p className="m-0 fz:13 fw-600 text-dark me-1">Mode :</p>
                <p className="m-0 fz:13 fw-600 text-dark me-1">Standart</p>
                <p className="m-0 fz:13 fw-600 text-green">Professional</p>
              </div>
              <div className="nav gap:2 jce">
                <button className="btn-control px-3 btn-control-sm btn-control-primary-contained d-flex jcb is_active">
                  <span className="fz:10">Binance</span>
                  <span className="fz:10">On</span>
                </button>
                <button className="btn-control px-3 btn-control-sm btn-control-primary-contained d-flex jcb">
                  <span className="fz:10">Tokocrypto</span>
                  <span className="fz:10">Off</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-2 mb-0">
                <li className="breadcrumb-item fz:12 fw-600 link-btn">
                  Binance
                </li>
                <li className="breadcrumb-item fz:12 fw-600 active">
                  Tokocrypto
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trades;
