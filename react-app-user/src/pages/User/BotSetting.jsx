import React, { useState, useRef } from "react";
import { Slide } from "react-slideshow-image";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

import Binance from "../../assets/img/binance.png";
import Tokocrypto from "../../assets/img/tko.png";
import banner from "../../assets/img/banner.jpg";

import "react-slideshow-image/dist/styles.css";
import "../../styles/auth.css";

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
  const [botSignal, setBotSignal] = useState(1);
  const [modal, setModal] = useState({
    message: "",
    isLoading: false,
  });
  const idMode = useRef();

  const connectExchange = (index) => {
    setActive(index);
  };
  const handleModal = (message, isLoading) => {
    setModal({
      message,
      isLoading,
    });
  };
  const modeChange = (index) => {
    var message1 =
      "User who opt for the STANDART MODE, will receive masters coin signals";
    var message2 =
      "Users who opt for the PROFESSIONAL MODE, will receive Utility and Meme coin signals";
    var idm = (idMode.current = index);
    if (idm == 1) {
      handleModal(message1, true);
    } else {
      handleModal(message2, true);
    }
  };

  const exchange = (choose) => {
    if (choose) {
      setMode(idMode.current);
      handleModal("", false);
      alert("Berhasil mengganti mode");
    } else {
      handleModal("", false);
    }
  };

  const upgradeBotSignal = (index) => {
    console.log(index);
    setBotSignal(index);
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
              <select id="select" className="form-select form-select-sm">
                <option
                  value="1"
                  selected
                  disabled
                  className="text-dark"
                  id="option-ubs"
                >
                  Upgrade
                </option>
                <option
                  value="2"
                  onSelect={() => upgradeBotSignal(1)}
                  className="text-dark"
                  id="option-ubs"
                >
                  Advance
                </option>
                <option
                  value="3"
                  onSelect={() => upgradeBotSignal(2)}
                  className="text-dark"
                  id="option-ubs"
                >
                  Expert
                </option>
              </select>
              <button className="btn-control btn-control-sm btn-control-first">
                Upgrade
              </button>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h2 className="mb-2 fz:14 fw-600 text-dark">
              Detailed Bot Setting
            </h2>
            <div className="box-grid:2 gap:2">
              <div className="card bg-first">
                <div className="card-body">
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td className="fz:11 text-dark">First Buy</td>
                        <td className="fz:11 text-dark">:</td>
                        <td className="fz:11 text-dark text-end">100 USDT</td>
                      </tr>
                      <tr>
                        <td className="fz:11 text-dark">Mode</td>
                        <td className="fz:11 text-dark">:</td>
                        <td className="fz:11 text-dark text-end">
                          Professional
                        </td>
                      </tr>
                      <tr>
                        <td className="fz:11 text-dark">Pair Trading</td>
                        <td className="fz:11 text-dark">:</td>
                        <td className="fz:11 text-dark text-end">6</td>
                      </tr>
                    </tbody>
                  </table>
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

      {modal.isLoading && (
        <Modal
          className="Modal"
          buttonText="Confirm"
          modalFooter="jcc pb-0"
          message={modal.message}
          onModal={exchange}
        />
      )}
    </div>
  );
};

export default BotSetting;
