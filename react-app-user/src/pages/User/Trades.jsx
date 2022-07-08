import React from "react";
import { Link } from "react-router-dom";
const Trades = () => {
  return (
    <div className="sc-dbhs">
      <div className="dbcontent">
        <div className="card mb-2">
          <div className="card-height-lg"></div>
        </div>

        <div className="card card-shadow:1 mb-2">
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
              <div className="nav gap:2 aic jce">
                <button className="btn-control btn-control-sm px-3">
                  On/Off
                </button>
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
        <div className="card card-elm">
          <div className="card-body">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-2 mb-3">
                <li className="breadcrumb-item fz:12 fw-600 link-btn">
                  Binance
                </li>
                <li className="breadcrumb-item fz:12 fw-600 active">
                  Tokocrypto
                </li>
              </ol>
            </nav>
            <div className="card card-trades mb-2">
              <div className="card-body">
                <div className="nav jcb nav-hr mb-2">
                  <div className="nav">
                    <div className="icon-coin"></div>
                    <div className="nav aic">
                      <h2 className="m-0 fz:16 fw-600 text-dark me-1">ADA /</h2>
                      <p className="m-0 fz:12 fw-500 text-dark">USDT</p>
                    </div>
                  </div>
                  <div className="range">
                    <h2 className="mb-1 text-range text-range-mute fz:16">
                      0.00%
                    </h2>
                    <button className="btn-control btn-control-sm px-3">
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="nav jcb">
                  <h2 className="mb-1 fz:13 fw-500">Quantity: 0</h2>
                  <div className="nav nav-column">
                    <p className="m-0 fz:10 fw-600">Profit : 0.00 USDT</p>
                    <p className="m-0 fz:10 fw-600">Chg : 0 %</p>
                  </div>
                </div>
                <div className="nav jcb">
                  <h2 className="mb-1 fz:13 fw-500">Price: 0.8441</h2>
                </div>
              </div>
            </div>

            <div className="card card-trades mb-2">
              <div className="card-body">
                <div className="nav jcb nav-hr mb-2">
                  <div className="nav">
                    <div className="icon-coin"></div>
                    <div className="nav aic">
                      <h2 className="m-0 fz:16 fw-600 text-dark me-1">
                        ALGO /
                      </h2>
                      <p className="m-0 fz:12 fw-500 text-dark">USDT</p>
                    </div>
                  </div>
                  <div className="range">
                    <h2 className="mb-1 text-range text-range-red fz:16">
                      0.5%
                    </h2>
                    <button className="btn-control btn-control-sm px-3">
                      Sell
                    </button>
                  </div>
                </div>
                <div className="nav jcb">
                  <h2 className="mb-1 fz:13 fw-500">Quantity: 41</h2>
                  <div className="nav nav-column">
                    <p className="m-0 fz:10 fw-600">Profit : 0.01 USDT</p>
                    <p className="m-0 fz:10 fw-600">Chg : -0.5 %</p>
                  </div>
                </div>
                <div className="nav jcb">
                  <h2 className="mb-1 fz:13 fw-500">Price: 0.6679</h2>
                </div>
              </div>
            </div>

            <div className="card card-trades mb-2">
              <div className="card-body">
                <div className="nav jcb nav-hr mb-2">
                  <div className="nav">
                    <div className="icon-coin"></div>
                    <div className="nav aic">
                      <h2 className="m-0 fz:16 fw-600 text-dark me-1">
                        ALICE /
                      </h2>
                      <p className="m-0 fz:12 fw-500 text-dark">USDT</p>
                    </div>
                  </div>
                  <div className="range">
                    <h2 className="mb-1 text-range text-range-green fz:16">
                      0.5%
                    </h2>
                    <button className="btn-control btn-control-sm px-3">
                      Sell
                    </button>
                  </div>
                </div>
                <div className="nav jcb">
                  <h2 className="mb-1 fz:13 fw-500">Quantity: 41</h2>
                  <div className="nav nav-column">
                    <p className="m-0 fz:10 fw-600">Profit : 0.01 USDT</p>
                    <p className="m-0 fz:10 fw-600">Chg : +0.5 %</p>
                  </div>
                </div>
                <div className="nav jcb">
                  <h2 className="mb-1 fz:13 fw-500">Price: 0.8841</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trades;
