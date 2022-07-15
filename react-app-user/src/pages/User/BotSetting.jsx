import React, { useState } from "react";
import Header from "../../components/Header/Header";

import Binance from "../../assets/img/binance.png";
import Tokocrypto from "../../assets/img/tko.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "../../styles/auth.css";
import banner from "../../assets/img/banner.jpg";

const slideImages = [
  {
    url: banner,
  },
  {
    url: banner,
  },
];
const BotSetting = () => {
  const [active, setActive] = useState(1);
  const [mode, setMode] = useState(2);

  const connectExchange = (index) => {
    setActive(index);
  };

  const modeChange = (index) => {
    setMode(index);
  };

  const upgradeBot = () => {
    const ubs = document.getElementById("select").value;
    if (ubs == 2) {
      alert("Bot signal is Advance");
    } else if (ubs == 3) {
      alert("Bot signal is Expert");
    }
  };

  return (
    <div className="sc-dbhs">
      <Header />
      <div className="dbhs-content">
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

        <div className="card mb-2">
          <div className="card-body">
            <h2 className="mb-2 fz:14 fw-600 text-dark">Request Trade</h2>
            <form action="" id="form-validation">
              <div className="row">
                <div className="box-grid:2 gap:2 mb-2">
                  <input
                    type="text"
                    placeholder="First buy in ammount"
                    className="input-control input-control-sm"
                  />
                  <button className="btn-control btn-control-sm btn-control-first">
                    Save
                  </button>
                </div>
                <div className="box-grid:2 gap:2">
                  <input
                    type="text"
                    placeholder="Signal Quantity"
                    className="input-control input-control-sm"
                  />
                  <button className="btn-control btn-control-sm btn-control-first">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h2 className="mb-2 fz:14 fw-600 text-dark">Mode</h2>
            <div className="box-grid:2 gap:2">
              <button
                className={
                  mode === 1
                    ? "btn-control btn-control-sm btn-control-first-contained is_active"
                    : "btn-control btn-control-sm btn-control-first-contained"
                }
                onClick={() => modeChange(1)}
              >
                Standart
              </button>
              <button
                className={
                  mode === 2
                    ? "btn-control btn-control-sm btn-control-first-contained is_active"
                    : "btn-control btn-control-sm btn-control-first-contained"
                }
                onClick={() => modeChange(2)}
              >
                Professional
              </button>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h2 className="mb-2 fz:14 fw-600 text-dark">Upgrade Bot Signal</h2>
            <div className="box-grid:2 gap:2">
              <select
                defaultValue="0"
                id="select"
                className="form-select form-select-sm"
              >
                <option value="1" className="text-dark" id="option-ubs">
                  Standart
                </option>
                <option value="2" className="text-dark" id="option-ubs">
                  Advance
                </option>
                <option value="3" className="text-dark" id="option-ubs">
                  Expert
                </option>
              </select>
              <button
                className="btn-control btn-control-sm btn-control-first"
                onClick={upgradeBot}
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h2 className="mb-2 fz:14 fw-600 text-dark">Bot Setting Summary</h2>
            <div className="box-grid:2 gap:2">
              <div className="card bg-first">
                <div className="card-body">
                  <div className="nav jcb">
                    <p className="m-0 fz:12 text-dark">First Buy :</p>
                    <p className="m-0 fz:14 fw-600 text-dark">100 USDT</p>
                  </div>
                  <div className="nav jcb">
                    <p className="m-0 fz:12 text-dark">Mode :</p>
                    <p className="m-0 fz:14 fw-600 text-dark">Professional</p>
                  </div>
                  <div className="nav jcb">
                    <p className="m-0 fz:12 text-dark">Pair Trading :</p>
                    <p className="m-0 fz:14 fw-600 text-dark">6</p>
                  </div>
                </div>
              </div>
              <div className="card bg-first">
                <div className="card-body nav aic jcc">
                  <div className="nav aic jcc flex-column">
                    <p className="m-0 fz:13 text-dark">Bot Used:</p>
                    <p className="m-0 fz:14 fw-600 text-dark">Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h2 className="mb-2 fz:14 fw-600 text-dark">API Binding</h2>
            <div className="box-grid:2 gap:2">
              <div className="coin-group-flex bg-first radius-card py-1 px-2">
                <div className="coin-icon">
                  <img src={Binance} alt="_coin-binance" />
                </div>
                <div className="d-block">
                  <h2 className="m-0 fz:13 fw-600 text-white">Binance</h2>
                  <p className="m-0 fz:15 fw-500 text-green">Bound</p>
                </div>
              </div>
              <div className="coin-group-flex bg-first radius-card py-1 px-2">
                <div className="coin-icon">
                  <img src={Tokocrypto} alt="_coin-tokocrypto" />
                </div>
                <div className="d-block">
                  <h2 className="m-0 fz:13 fw-600 text-white">Tokocrypto</h2>
                  <p className="m-0 fz:15 fw-500 text-red">Unbound</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h2 className="mb-2 fz:14 fw-600 text-dark">Connected Exchange</h2>
            <div className="box-grid:2 gap:2">
              <button
                className={
                  active === 1
                    ? "btn-control btn-control-sm btn-control-first-contained d-flex jcb is_active"
                    : "btn-control btn-control-sm btn-control-first-contained d-flex jcb"
                }
                onClick={() => connectExchange(1)}
              >
                <span>Binance</span>
                <span>{active === 1 ? "On" : "Off"}</span>
              </button>
              <button
                className={
                  active === 2
                    ? "btn-control btn-control-sm btn-control-first-contained d-flex jcb is_active"
                    : "btn-control btn-control-sm btn-control-first-contained d-flex jcb"
                }
                onClick={() => connectExchange(2)}
              >
                <span>Tokocrypto</span>
                <span>{active === 2 ? "On" : "Off"}</span>
              </button>
            </div>
            <p className="mt-1 mb-0 fz:12 fw-600 text-mute">
              Available Balance : 31,000 USDT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSetting;
