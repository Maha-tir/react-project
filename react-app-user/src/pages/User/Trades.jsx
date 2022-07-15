import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import banner from "../../assets/img/banner.jpg";

const slideImages = [
  {
    url: banner,
  },
  {
    url: banner,
  },
];

const Trades = () => {
  const [active, setActive] = useState(1);
  const connectExchange = (index) => {
    setActive(index);
  };
  return (
    <div className="sc-dbhs">
      <div className="dbcontent">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="card mb-2 border-none" key={index}>
              <div className="card-height-lg">
                <div className="card-image">
                  <img src={slideImage.url} alt="_banner" />
                </div>
              </div>
            </div>
          ))}
        </Slide>

        <div className="card card-shadow:1 mb-2 bg-first border-none">
          <div className="card-body">
            <div className="box-grid:3 gap:2">
              <div className="nav flex-column">
                <div className="nav aic">
                  <p className="m-0 fz:13 text-white" style={{ width: "90px" }}>
                    First Buy :
                  </p>
                  <p className="m-0 fz:12 text-white">15 USDT</p>
                </div>
                <div className="nav aic">
                  <p className="m-0 fz:12 text-white" style={{ width: "90px" }}>
                    Signal Quantity :
                  </p>
                  <p className="m-0 fz:12 text-white">1</p>
                </div>
              </div>
              <div className="nav flex-column">
                <div className="nav aic">
                  <p className="m-0 fz:12 text-white">Signal :</p>
                  <p className="m-0 fz:12 text-white">Expert</p>
                </div>
                <div className="nav aic">
                  <p className="m-0 fz:12 text-white">Mode :</p>
                  <p className="m-0 fz:12 text-white">Standart</p>
                </div>
              </div>
              <Link
                to="/user/transaction"
                className="nav flex-column aic jcc text-white tdn"
              >
                <i className="bx bx-book-reader fz:24"></i>
                <span className="fz:11 fw-600">Transaction</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-elm">
          <div className="card-body">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-2 mb-3">
                <li className="fz:14 fw-600 text-red me-1">LIVE</li>
                <li className="breadcrumb-item fz:12 fw-600 link-btn bg-first">
                  Binance
                </li>
                <li className="breadcrumb-item fz:12 fw-600 active text-dark">
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
                  <h2 className="mb-1 fz:13 fw-500 text-dark">Quantity: 0</h2>
                  <div className="nav nav-column">
                    <p className="m-0 fz:10 fw-600 text-dark">
                      Profit : 0.00 USDT
                    </p>
                    <p className="m-0 fz:10 fw-600">Chg : 0 %</p>
                  </div>
                </div>
                <div className="nav jcb">
                  <h2 className="mb-1 fz:13 fw-500 text-dark">Price: 0.8441</h2>
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
                  <h2 className="mb-1 fz:13 fw-500 text-dark text-dark">
                    Quantity: 41
                  </h2>
                  <div className="nav nav-column">
                    <p className="m-0 fz:10 fw-600 text-dark text-dark">
                      Profit : 0.01 USDT
                    </p>
                    <p className="m-0 fz:10 fw-600">Chg : -0.5 %</p>
                  </div>
                </div>
                <div className="nav jcb">
                  <h2 className="mb-1 fz:13 fw-500 text-dark text-dark">
                    Price: 0.6679
                  </h2>
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
                  <h2 className="mb-1 fz:13 fw-500 text-dark">Quantity: 41</h2>
                  <div className="nav nav-column">
                    <p className="m-0 fz:10 fw-600 text-dark">
                      Profit : 0.01 USDT
                    </p>
                    <p className="m-0 fz:10 fw-600">Chg : +0.5 %</p>
                  </div>
                </div>
                <div className="nav jcb">
                  <h2 className="mb-1 fz:13 fw-500 text-dark">Price: 0.8841</h2>
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
