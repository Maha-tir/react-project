import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import banner from "../../assets/img/banner.jpg";

import ADA from "../../assets/img/KOIN/ADA-non.png";
import ALGO from "../../assets/img/KOIN/ALGO-non.png";
import ALICE from "../../assets/img/KOIN/ALICE-non.png";

const slideImages = [
  {
    url: banner,
  },
  {
    url: banner,
  },
];

const coinBinance = [
  {
    id: 1,
    image: ADA,
    title: "ADA",
    subtitle: "USDT",
    persent: "0.00%",
    quantity: 0,
    price: "0.8441",
    profit: "0.00 USDT",
    chg: "0%",
    type: "mute",
    button: "Cancel",
  },
  {
    id: 2,
    image: ALGO,
    title: "ALGO",
    subtitle: "USDT",
    persent: "0.5%",
    quantity: 41,
    price: "0.6679",
    profit: "0.01 USDT",
    chg: "-0,5%",
    type: "red",
    button: "Sell",
  },
  {
    id: 3,
    image: ALICE,
    title: "ALICE",
    subtitle: "USDT",
    persent: "0.0%",
    quantity: 0,
    price: "0.8441",
    profit: "0.01 USDT",
    chg: "+ 0.5%",
    type: "green",
    button: "Sell",
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
              <table>
                <tbody>
                  <tr>
                    <td className="fz:11 text-white">First Buy</td>
                    <td className="fz:11 text-white">:</td>
                    <td className="fz:11 text-white">15 USDT</td>
                  </tr>
                  <tr>
                    <td className="fz:11 text-white">Signal Quantity</td>
                    <td className="fz:11 text-white">:</td>
                    <td className="fz:11 text-white">1</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td className="fz:11 text-white">Signal</td>
                    <td className="fz:11 text-white">:</td>
                    <td className="fz:11 text-white">Expert</td>
                  </tr>
                  <tr>
                    <td className="fz:11 text-white">Mode</td>
                    <td className="fz:11 text-white">:</td>
                    <td className="fz:11 text-white">Standart</td>
                  </tr>
                </tbody>
              </table>
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
            {coinBinance.map((coin, index) => (
              <div className="card card-trades mb-2" key={index}>
                <div className="card-body">
                  <div className="nav jcb nav-hr mb-2">
                    <div className="nav aic">
                      <div className="icon-coin">
                        <img src={coin.image} alt={coin.image} />
                      </div>
                      <div className="nav aic">
                        <h2 className="m-0 fz:16 fw-600 text-dark me-1">
                          {coin.title} /
                        </h2>
                        <p className="m-0 fz:12 fw-500 text-dark">
                          {coin.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="range">
                      <h2
                        className={`mb-1 text-range text-range-${coin.type} fz:16`}
                      >
                        {coin.persent}
                      </h2>
                      <button className="btn-control btn-control-sm px-3">
                        {coin.button}
                      </button>
                    </div>
                  </div>
                  <div className="nav jcb">
                    <div className="nav nav-column">
                      <h2 className="mb-0 fz:13 fw-500 text-dark">
                        Quantity: {coin.quantity}
                      </h2>
                      <h2 className="mb-1 fz:13 fw-500 text-dark">
                        Price: {coin.price}
                      </h2>
                    </div>
                    <div className="nav nav-column">
                      <p className="m-0 fz:10 fw-600 text-dark">
                        Profit :{" "}
                        <span className={`text-${coin.type}`}>
                          {coin.profit}
                        </span>
                      </p>
                      <p className="m-0 fz:10 fw-600">
                        Chg :{" "}
                        <span className={`text-${coin.type}`}>{coin.chg}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="card card-trades mb-2">
              <div className="card-body">
                <div className="nav jcb nav-hr mb-2">
                  <div className="nav aic">
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
                  <div className="nav nav-column">
                    <h2 className="mb-0 fz:13 fw-500 text-dark">
                      Quantity: 41
                    </h2>
                    <h2 className="mb-1 fz:13 fw-500 text-dark">
                      Price: 0.6679
                    </h2>
                  </div>
                  <div className="nav nav-column">
                    <p className="m-0 fz:10 fw-600 text-dark">
                      Profit : <span className="text-red">0.01 USDT</span>
                    </p>
                    <p className="m-0 fz:10 fw-600">
                      Chg : <span className="text-red">-0,5 %</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-trades mb-2">
              <div className="card-body">
                <div className="nav jcb nav-hr mb-2">
                  <div className="nav aic">
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
                  <div className="nav nav-column">
                    <h2 className="mb-0 fz:13 fw-500 text-dark">Quantity: 0</h2>
                    <h2 className="mb-1 fz:13 fw-500 text-dark">
                      Price: 0.8441
                    </h2>
                  </div>
                  <div className="nav nav-column">
                    <p className="m-0 fz:10 fw-600 text-dark">
                      Profit : <span className="text-green">0.01 USDT</span>
                    </p>
                    <p className="m-0 fz:10 fw-600">
                      Chg : <span className="text-green">+ 0,5 %</span>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trades;
