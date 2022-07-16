import React, { useState, useRef } from "react";
import { Slide } from "react-slideshow-image";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

import Binance from "../../assets/img/binance.png";
import Tokocrypto from "../../assets/img/tko.png";
import banner from "../../assets/img/banner.jpg";

import "react-slideshow-image/dist/styles.css";
import "../../styles/auth.css";
import FullModal from "../../components/Modal/FullModal";

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
  const [apiBinding, setApiBinding] = useState(1);

  const [modal, setModal] = useState({
    message: "",
    isLoading: false,
  });
  const [fullModal, setFullModal] = useState({
    message: "",
    isLoading: false,
  });

  const idMode = useRef();
  const idapiBinding = useRef();

  const handleFullModal = (message, isLoading) => {
    setFullModal({
      message,
      isLoading,
    });
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

  const apibindChange = (index) => {
    idapiBinding.current = index;
    handleFullModal(index, true);
  };

  const apiBind = (choose) => {
    if (choose) {
      setApiBinding(idapiBinding.current);
      handleFullModal("", false);
      alert("Berhasil Bind");
    } else {
      handleFullModal("", false);
    }
  };

  const connectExchange = (index) => {
    setActive(index);
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

        <div className="card mb-2 card-bot-setting">
          <div className="card-body">
            <h2 className="mb-2 fz:13 fw-600 text-dark text-uppercase">
              Request Trade
            </h2>
            <form action="" id="form-validation">
              <div className="row">
                <div className="box-grid:2 gap:2 mb-2">
                  <input
                    type="text"
                    placeholder="First buy in ammount"
                    className="input-control input-control-sm"
                  />
                  <button className="btn-control btn-control-sm btn-control-first-contained">
                    Save
                  </button>
                </div>
                <div className="box-grid:2 gap:2">
                  <input
                    type="text"
                    placeholder="Signal Quantity"
                    className="input-control input-control-sm"
                  />
                  <button className="btn-control btn-control-sm btn-control-first-contained">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card mb-2 card-bot-setting">
          <div className="card-body">
            <h2 className="mb-2 fz:13 fw-600 text-dark text-uppercase">Mode</h2>
            <div className="box-grid:2 gap:2">
              <button
                className={
                  mode === 1
                    ? "text-uppercase fw-600 btn-control btn-control-sm btn-control-first-contained is_active"
                    : "text-uppercase fw-600 btn-control btn-control-sm btn-control-first-contained"
                }
                onClick={() => modeChange(1)}
              >
                Standart
              </button>
              <button
                className={
                  mode === 2
                    ? "text-uppercase fw-600 btn-control btn-control-sm btn-control-first-contained is_active"
                    : "text-uppercase fw-600 btn-control btn-control-sm btn-control-first-contained"
                }
                onClick={() => modeChange(2)}
              >
                Professional
              </button>
            </div>
          </div>
        </div>

        <div className="card mb-2 card-bot-setting">
          <div className="card-body">
            <h2 className="mb-2 fz:13 fw-600 text-dark text-uppercase">
              Upgrade Bot Signal
            </h2>
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
                <option value="2" className="text-dark" id="option-ubs">
                  Advance
                </option>
                <option value="3" className="text-dark" id="option-ubs">
                  Expert
                </option>
              </select>
              <button className="btn-control btn-control-sm btn-control-first">
                Upgrade
              </button>
            </div>
          </div>
        </div>

        <div className="card mb-2 card-bot-setting">
          <div className="card-body">
            <h2 className="mb-2 fz:13 fw-600 text-dark text-uppercase">
              Detailed Bot Setting
            </h2>
            <div className="box-grid:2 gap:2">
              <div className="card bg-first">
                <div className="card-body">
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td className="fz:11 text-dark text-uppercase fw-500">
                          First Buy
                        </td>
                        <td className="fz:11 text-dark text-uppercase fw-500">
                          :
                        </td>
                        <td className="fz:11 text-dark text-uppercase fw-600 text-end">
                          100 USDT
                        </td>
                      </tr>
                      <tr>
                        <td className="fz:11 text-dark text-uppercase fw-500">
                          Mode
                        </td>
                        <td className="fz:11 text-dark text-uppercase fw-500">
                          :
                        </td>
                        <td className="fz:11 text-dark text-uppercase fw-600 text-end">
                          Professional
                        </td>
                      </tr>
                      <tr>
                        <td className="fz:11 text-dark text-uppercase fw-500">
                          Pair Trading
                        </td>
                        <td className="fz:11 text-dark text-uppercase fw-500">
                          :
                        </td>
                        <td className="fz:11 text-dark text-uppercase fw-600 text-end">
                          6
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card bg-first">
                <div className="card-body nav aic jcc">
                  <div className="nav aic jcc flex-column">
                    <p className="m-0 fz:13 text-dark text-uppercase">
                      Bot Used:
                    </p>
                    <p className="m-0 fz:14 fw-600 text-dark text-uppercase">
                      Expert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-2 card-bot-setting">
          <div className="card-body">
            <h2 className="mb-2 fz:13 fw-600 text-dark text-uppercase">
              API Binding
            </h2>
            <div className="box-grid:2 gap:2">
              <button
                type="button"
                onClick={() => apibindChange(1)}
                className="coin-group-flex bg-first radius-card py-1 px-2"
                style={{ border: "none" }}
              >
                <div className="coin-icon">
                  <img src={Binance} alt="_coin-binance" />
                </div>
                <div className="d-block">
                  <h2 className="m-0 fz:13 fw-600 text-dark text-uppercase">
                    Binance
                  </h2>
                  <p
                    className={
                      apiBinding === 1
                        ? "m-0 fz:14 fw-500 text-green text-uppercase"
                        : "m-0 fz:14 fw-500 text-red text-uppercase"
                    }
                  >
                    {apiBinding === 1 ? "Bound" : "Unbound"}
                  </p>
                </div>
              </button>
              <button
                type="button"
                onClick={() => apibindChange(2)}
                className="coin-group-flex bg-first radius-card py-1 px-2"
                style={{ border: "none" }}
              >
                <div className="coin-icon">
                  <img src={Tokocrypto} alt="_coin-tokocrypto" />
                </div>
                <div className="d-block">
                  <h2 className="m-0 fz:13 fw-600 text-dark text-uppercase">
                    Tokocrypto
                  </h2>
                  <p
                    className={
                      apiBinding === 2
                        ? "m-0 fz:14 fw-500 text-green text-uppercase"
                        : "m-0 fz:14 fw-500 text-red text-uppercase"
                    }
                  >
                    {apiBinding === 2 ? "Bound" : "Unbound"}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="card mb-2 card-bot-setting">
          <div className="card-body">
            <h2 className="mb-2 fz:13 fw-600 text-dark text-uppercase">
              Exchange Setting For Use
            </h2>
            <div className="box-grid:2 gap:2">
              <button
                className={
                  active === 1
                    ? "btn-control btn-control-sm btn-control-first-contained d-flex jcb is_active"
                    : "btn-control btn-control-sm btn-control-first-contained d-flex jcb"
                }
                onClick={() => connectExchange(1)}
              >
                <span className="text-uppercase text-dark fw-600">Binance</span>
                <span
                  className={
                    active === 1
                      ? "text-uppercase text-green fw-600"
                      : "text-uppercase text-red fw-600"
                  }
                >
                  {active === 1 ? "On" : "Off"}
                </span>
              </button>
              <button
                className={
                  active === 2
                    ? "btn-control btn-control-sm btn-control-first-contained d-flex jcb is_active"
                    : "btn-control btn-control-sm btn-control-first-contained d-flex jcb"
                }
                onClick={() => connectExchange(2)}
              >
                <span className="text-uppercase text-dark fw-600">
                  Tokocrypto
                </span>
                <span
                  className={
                    active === 2
                      ? "text-uppercase text-green fw-600"
                      : "text-uppercase text-red fw-600"
                  }
                >
                  {active === 2 ? "On" : "Off"}
                </span>
              </button>
            </div>
            <p className="mt-1 mb-0 fz:12 fw-600 text-mute">
              Total Balance : 31,000 USDT
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

      {fullModal.isLoading && (
        <FullModal
          className="full-height"
          buttonText="Bind"
          onModal={apiBind}
          message
        />
      )}
    </div>
  );
};

export default BotSetting;
