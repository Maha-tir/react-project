import React, { useState } from "react";
import { Link } from "react-router-dom";

const Asset = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTabs = (index) => {
    setToggle(index);
  };

  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Asset</span>
      </header>
      <div className="dbhs-content">
        <div className="card mb-2">
          <div className="card-height-md bg-first">
            <div className="card-body row h:100">
              <div className="box-grid:2">
                <div className="nav nav-column">
                  <p className="m-0 fz:12 text-dark">
                    Total Asset Converted (USDT)
                  </p>
                  <h2 className="m-0 fz:17 fw-600 text-white">888.12345678</h2>
                  <p className="m-0 fz:11 text-white">= 12.877.789 IDR</p>
                </div>
                <div className="nav nav-column">
                  <p className="m-0 fz:12 text-white">24H</p>
                  <h2 className="m-0 fz:17 fw-600 text-white">+6.9%</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body row h:100">
            <div className="box-grid:3">
              <Link
                to="/user/deposit"
                className="nav nav-column nav-column-icon"
              >
                <i className="fa-solid fa-sack-dollar"></i>
                <h2 className="m-0 fz:12 fw-600 text-dark">Deposit</h2>
              </Link>
              <Link
                to="/user/withdraw"
                className="nav nav-column nav-column-icon"
              >
                <i className="fa-solid fa-wallet"></i>
                <h2 className="m-0 fz:12 fw-600 text-dark">Withdrawl</h2>
              </Link>
              <Link
                to="/user/transfer"
                className="nav nav-column nav-column-icon"
              >
                <i className="fa-solid fa-money-bill-transfer"></i>
                <h2 className="m-0 fz:12 fw-600 text-dark">Transfer</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="card-overflow row h:100">
          <div className="nav justify-content-between mb-1">
            <h2 className="m-0 fz:12 fw-600 text-dark text-uppercase">
              History Record
            </h2>
            <p className="m-0 fz:12 fw-600 text-dark">Today</p>
          </div>
          <div className="box-grid:3 gap:2 mb-2">
            <button
              className={
                toggle === 1
                  ? "btn-navs-tabs text-uppercase fz:14 active"
                  : "btn-navs-tabs text-uppercase fz:14"
              }
              onClick={() => toggleTabs(1)}
            >
              Deposit
            </button>
            <button
              className={
                toggle === 2
                  ? "btn-navs-tabs text-uppercase fz:14 active"
                  : "btn-navs-tabs text-uppercase fz:14"
              }
              onClick={() => toggleTabs(2)}
            >
              Withdrawl
            </button>
            <button
              className={
                toggle === 3
                  ? "btn-navs-tabs text-uppercase fz:14 active"
                  : "btn-navs-tabs text-uppercase fz:14"
              }
              onClick={() => toggleTabs(3)}
            >
              Transfer
            </button>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div
            className={
              toggle === 2
                ? "card mb-2 order-1 card-active"
                : "card order-2 mb-2 card-mute"
            }
          >
            {toggle === 2 ? (
              <div className="badge-active"></div>
            ) : (
              <div className="badge-not-active"></div>
            )}
            <div className="card-body">
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">Withdrawl</h2>
                <p className="m-0 fz:11 fw-600 text-mute">2022-07-01 | 11:11</p>
              </div>
              <h2 className="mb-1 fz:17 text-dark">888 USDT</h2>
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">Chain</h2>
                <p className="m-0 fz:11 fw-600 text-mute">TRC20</p>
              </div>
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">
                  Withdrawl Address
                </h2>
                <p className="m-0 fz:11 fw-600 text-mute">
                  ip7SGwwagZWyfrNh6soP3h3M53o
                </p>
              </div>
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">Hash</h2>
                <p className="m-0 fz:11 fw-600 text-mute">
                  3J9D2fAhX4DjRQ7ycqDH4d8h33i7RjfbrXUw
                </p>
              </div>
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">Fee Withdrawl</h2>
                <p className="m-0 fz:11 fw-600 text-mute">2 USDT</p>
              </div>
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">Status</h2>
                <p className="m-0 fz:11 fw-600 text-mute">
                  PENDING/APPROVED/SUCCES
                </p>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 3
                ? "card mb-2 order-1 card-active"
                : "card order-3 mb-2 card-mute"
            }
          >
            {toggle === 3 ? (
              <div className="badge-active"></div>
            ) : (
              <div className="badge-not-active"></div>
            )}
            <div className="card-body">
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">
                  Transfer / Internal
                </h2>
                <p className="m-0 fz:11 fw-600 text-mute">2022-07-01 | 11:11</p>
              </div>
              <h2 className="mb-1 fz:17 text-dark">222 USDT</h2>
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">Chain</h2>
                <p className="m-0 fz:11 fw-600 text-mute">TRC20</p>
              </div>
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">
                  Withdrawl Address
                </h2>
                <p className="m-0 fz:11 fw-600 text-mute">
                  ip7SGwwagZWyfrNh6soP3h3M53o
                </p>
              </div>
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">Status</h2>
                <p className="m-0 fz:11 fw-600 text-mute">
                  PENDING/APPROVED/SUCCES
                </p>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 1
                ? "card mb-2 order-1 card-active"
                : "card order-1 mb-2 card-mute"
            }
          >
            {toggle === 1 ? (
              <div className="badge-active"></div>
            ) : (
              <div className="badge-not-active"></div>
            )}

            <div className="card-body">
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">Deposit</h2>
                <p className="m-0 fz:11 fw-600 text-mute">2022-07-01 | 11:11</p>
              </div>
              <h2 className="mb-1 fz:17 text-dark">444 USDT</h2>
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">Chain</h2>
                <p className="m-0 fz:11 fw-600 text-mute">TRC20</p>
              </div>
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">Deposit Address</h2>
                <p className="m-0 fz:11 fw-600 text-mute">
                  ip7SGwwagZWyfrNh6soP3h3M53o
                </p>
              </div>
              <div className="nav justify-content-between mb-1">
                <h2 className="m-0 fz:11 fw-600 text-mute">Status</h2>
                <p className="m-0 fz:11 fw-600 text-mute">
                  PENDING/APPROVED/SUCCES
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asset;
