import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../../style/dashboard.css";

import Modal from "../../components/Modal/Modal";

const data = [
  {
    id: 1,
    name: "BTC/USDT",
  },
  {
    id: 2,
    name: "ETH/USDT",
  },
  {
    id: 3,
    name: "LIT/USDT",
  },
  {
    id: 4,
    name: "BNB/USDT",
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
            <div className="card-body">
              <div className="list-group-item-flex">
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
              </div>
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
                <tbody>
                  {coins.map((coin, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{coin.name}</td>
                      <td>
                        <button
                          className="sch-danger-btn"
                          onClick={() => handleDelete(coin.id)}
                        >
                          Cut Loss
                        </button>
                      </td>
                      <td>
                        <button className="sch-first-btn">
                          %Floating / Profit
                        </button>
                      </td>
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
