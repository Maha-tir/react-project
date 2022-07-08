import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "../../style/dashboard.css";

import Modal from "../../components/Modal/Modal";

const data = [
  {
    id: 1,
    waktu: "01-01-2021",
    mode: "Professional",
    pair: "BTC/USDT",
    exchange: "Binance",
    hargaBeli: "1.000",
    hargaJual: "1.015",
    profit: "+1,2%",
  },
  {
    id: 2,
    waktu: "02-01-2021",
    mode: "Professional",
    pair: "BTC/USDT",
    exchange: "Binance",
    hargaBeli: "1.000",
    hargaJual: "1.035",
    profit: "+1,3%",
  },
  {
    id: 3,
    waktu: "02-01-2021",
    mode: "Standart",
    pair: "BTC/USDT",
    exchange: "Tokocrypto",
    hargaBeli: "1.000",
    hargaJual: "1.035",
    profit: "+1,3%",
  },
];

const Dashboard = () => {
  const [coins, setCoins] = useState(data);
  const [modal, setModal] = useState({
    message: "",
    isLoading: false,
  });

  const idCoinsRef = useRef();
  const handleModal = (message, isLoading) => {
    setModal({
      message,
      isLoading,
    });
  };

  const handleDelete = (id) => {
    handleModal("Enter the reason you did this data cut loss", true);
    console.log(id);
    idCoinsRef.current = id;
  };

  const cutLoss = (choose) => {
    if (choose) {
      setCoins(coins.filter((coin) => coin.id !== idCoinsRef.current));
      handleModal("", false);
    } else {
      handleModal("", false);
    }
  };

  return (
    <div className="">
      <p className="nav-crumbs">Dashboard</p>
      <div className="row">
        <div className="col-md-5 col-lg-4">
          <div className="card">
            <div className="card-header">
              <h2
                style={{
                  fontSize: "23px",
                  margin: 0,
                }}
              >
                List Coin
              </h2>
            </div>
            <ul className="list-group list-group-flush mt-1">
              <li className="list-group-item list-group-item-flex">
                <div className="icon-item me-2">
                  <i className="bx bx-star"></i>
                </div>
                <div className="item-info-sm">
                  <p className="item-mix-sm">
                    BTC/ <span id="usdt">USDT</span>
                  </p>
                  <p className="price">Price : 000.00</p>
                  <p className="chg">
                    Chg: <span id="prcnt">00.00%</span>
                  </p>
                </div>
                <p className="item-all text-left ms-auto m-0">Bitcoin</p>
              </li>
              <li className="list-group-item list-group-item-flex">
                <div className="icon-item me-2">
                  <i className="bx bx-star"></i>
                </div>
                <div className="item-info-sm">
                  <p className="item-mix-sm">
                    ETH/ <span id="usdt">USDT</span>
                  </p>
                  <p className="price">Price : 000.00</p>
                  <p className="chg">
                    Chg: <span id="prcnt">00.00%</span>
                  </p>
                </div>
                <p className="item-all text-left ms-auto m-0">Ethereum</p>
              </li>
              <li className="list-group-item list-group-item-flex">
                <div className="icon-item me-2">
                  <i className="bx bx-star"></i>
                </div>
                <div className="item-info-sm">
                  <p className="item-mix-sm">
                    LIT/ <span id="usdt">USDT</span>
                  </p>
                  <p className="price">Price : 000.00</p>
                  <p className="chg">
                    Chg: <span id="prcnt">00.00%</span>
                  </p>
                </div>
                <p className="item-all text-left ms-auto m-0">Litentry</p>
              </li>
              <li className="list-group-item list-group-item-flex">
                <div className="icon-item me-2">
                  <i className="bx bx-star"></i>
                </div>
                <div className="item-info-sm">
                  <p className="item-mix-sm">
                    BNB/ <span id="usdt">USDT</span>
                  </p>
                  <p className="price">Price : 000.00</p>
                  <p className="chg">
                    Chg: <span id="prcnt">00.00%</span>
                  </p>
                </div>
                <p className="item-all text-left ms-auto m-0">BNB</p>
              </li>
              <li className="list-group-item list-group-item-flex">
                <div className="icon-item me-2">
                  <i className="bx bx-star"></i>
                </div>
                <div className="item-info-sm">
                  <p className="item-mix-sm">
                    USDC/ <span id="usdt">USDT</span>
                  </p>
                  <p className="price">Price : 000.00</p>
                  <p className="chg">
                    Chg: <span id="prcnt">00.00%</span>
                  </p>
                </div>
                <p className="item-all text-left ms-auto m-0">USD Coin</p>
              </li>
              <li className="list-group-item list-group-item-flex">
                <div className="icon-item me-2">
                  <i className="bx bx-star"></i>
                </div>
                <div className="item-info-sm">
                  <p className="item-mix-sm">
                    XRP/ <span id="usdt">USDT</span>
                  </p>
                  <p className="price">Price : 000.00</p>
                  <p className="chg">
                    Chg: <span id="prcnt">00.00%</span>
                  </p>
                </div>
                <p className="item-all text-left ms-auto m-0">Ripple</p>
              </li>
              <li className="list-group-item list-group-item-flex">
                <div className="icon-item me-2">
                  <i className="bx bx-star"></i>
                </div>
                <div className="item-info-sm">
                  <p className="item-mix-sm">
                    ADA/ <span id="usdt">USDT</span>
                  </p>
                  <p className="price">Price : 000.00</p>
                  <p className="chg">
                    Chg: <span id="prcnt">00.00%</span>
                  </p>
                </div>
                <p className="item-all text-left ms-auto m-0">Cardano</p>
              </li>
              <li className="list-group-item list-group-item-flex">
                <div className="icon-item me-2">
                  <i className="bx bx-star"></i>
                </div>
                <div className="item-info-sm">
                  <p className="item-mix-sm">
                    LUNA/ <span id="usdt">USDT</span>
                  </p>
                  <p className="price">Price : 000.00</p>
                  <p className="chg">
                    Chg: <span id="prcnt">00.00%</span>
                  </p>
                </div>
                <p className="item-all text-left ms-auto m-0">Terra</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-7 col-lg-8 mt-2 mt-lg-0">
          <div className="card card-minwidth">
            <div className="card-body row">
              <div className="col-sm-4">
                <div className="list-group-item-flex">
                  <div className="icon-item me-2">
                    <i className="bx bx-star"></i>
                  </div>
                  <div className="item-info-md">
                    <p className="item-mix-sm">
                      BTC/ <span id="usdt">USDT</span>
                    </p>
                    <p className="price">Price : 000.00</p>
                    <p className="chg">
                      Chg: <span id="prcnt">00.00%</span>
                    </p>
                    <button className="sch-view">View chart</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="item-block ms-3">
                  <div className="input-field">
                    <label htmlFor="limit-price" className="fz:14 fw-500">
                      Buy limit price
                    </label>
                    <input
                      type="text"
                      name="limit-price"
                      id="limit-price"
                      className="form-control"
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="profit-target" className="fz:14 fw-500">
                      Profit Target
                    </label>
                    <input
                      type="text"
                      name="profit-target"
                      id="profit-target"
                      className="input-profit"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="item-block mb-3">
                  <h2 className="m-0 fz:14 fw-500">Exchange</h2>
                  <div className="nav gap:2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Binance"
                      />
                      <label
                        className="m-0 fz:14 fw-500 cursor:pointer"
                        for="Binance"
                      >
                        Binance
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Tokocrypto"
                      />
                      <label
                        className="m-0 fz:14 fw-500 cursor:pointer"
                        for="Tokocrypto"
                      >
                        Tokocrypto
                      </label>
                    </div>
                  </div>
                </div>
                <div className="item-block">
                  <h2 className="m-0 fz:14 fw-500">Mode</h2>
                  <div className="nav gap:2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Standart"
                      />
                      <label
                        className="m-0 fz:14 fw-500 cursor:pointer"
                        for="Standart"
                      >
                        Standart
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Professional"
                      />
                      <label
                        className="m-0 fz:14 fw-500 cursor:pointer"
                        for="Professional"
                      >
                        Professional
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="list-group-item-flex">
                <div className="icon-item me-2">
                  <i className="bx bx-star"></i>
                </div>
                <div className="item-info-lg">
                  <p className="item-mix-lg">
                    BTC/ <span id="usdt">USDT</span>
                  </p>
                  <p className="price">Price : 000.00</p>
                  <p className="chg">
                    Chg: <span id="prcnt">00.00%</span>
                  </p>
                  <button className="sch-view">View chart</button>
                </div>
                <div className="item-block ms-3">
                  <div className="input-field">
                    <label htmlFor="limit-price">Buy limit price</label>
                    <input
                      type="text"
                      name="limit-price"
                      id="limit-price"
                      className="form-control"
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="profit-target">Profit Target</label>
                    <input
                      type="text"
                      name="profit-target"
                      id="profit-target"
                      className="input-profit"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <h2
            className="my-3"
            style={{
              fontSize: "20px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Live Trading On / Open Position
          </h2>
          <div className="card">
            <div className="table-responsive">
              <table className="table p-3">
                <thead>
                  <tr>
                    <th scope="col" className="fz:15">
                      Waktu
                    </th>
                    <th scope="col" className="fz:15">
                      Mode
                    </th>
                    <th scope="col" className="fz:15">
                      Pair
                    </th>
                    <th scope="col" className="fz:15">
                      Exchange
                    </th>
                    <th scope="col" className="fz:15">
                      Harga Beli
                    </th>
                    <th scope="col" className="fz:15">
                      Harga Jual
                    </th>
                    <th scope="col" className="fz:15">
                      Profit
                    </th>
                    <th scope="col" className="fz:15">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coins.map((coin, index) => (
                    <tr key={index}>
                      <td>{coin.waktu}</td>
                      <td>{coin.mode}</td>
                      <td>{coin.pair}</td>
                      <td>{coin.exchange}</td>
                      <td>{coin.hargaBeli}</td>
                      <td>{coin.hargaJual}</td>
                      <td>{coin.profit}</td>
                      <td>
                        <div className="nav flex-column">
                          <button className="sch-warning-btn">
                            Cancel Buy
                          </button>
                          <button
                            className="sch-danger-btn"
                            onClick={() => handleDelete(coin.id)}
                          >
                            Cut Loss
                          </button>
                        </div>
                      </td>
                      <td className="fw-600 text-green">{coin.profit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {modal.isLoading && (
          <Modal
            message={modal.message}
            classMessage="text-message"
            buttonAction="Cut Loss"
            icon="fa-solid fa-exclamation"
            typeModal="warning"
            typeButton="delete"
            inputText
            onModal={cutLoss}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
