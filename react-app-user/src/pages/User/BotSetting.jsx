import React from "react";
import Header from "../../components/Header/Header";

import "../../styles/auth.css";

const BotSetting = () => {
  return (
    <div className="sc-dbhs">
      <Header />
      <div className="dbhs-content">
        <div className="card mb-2">
          <div className="card-height-lg"></div>
        </div>

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
                  <button className="btn-control btn-control-sm">Save</button>
                </div>
                <div className="box-grid:2 gap:2">
                  <input
                    type="text"
                    placeholder="Pair Trading"
                    className="input-control input-control-sm"
                  />
                  <button className="btn-control btn-control-sm">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h2 className="mb-2 fz:14 fw-600 text-dark">Mode</h2>
            <div className="box-grid:2 gap:2">
              <button className="btn-control btn-control-sm btn-control-primary-contained">
                Standart
              </button>
              <button className="btn-control btn-control-sm btn-control-primary-contained is_active">
                Professional
              </button>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h2 className="mb-2 fz:14 fw-600 text-dark">Upgrade Bot Signal</h2>
            <div className="box-grid:2 gap:2">
              <select className="form-select form-select-sm">
                <option selected disabled className="selected">
                  Upgrade
                </option>
                <option value="1">Standart</option>
                <option value="2">Advance</option>
                <option value="3">Expert</option>
              </select>
              <button className="btn-control btn-control-sm btn-control-primary-contained is_active">
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
              <div className="card">
                <div className="card-body">
                  <div className="nav jcb">
                    <p className="m-0 fz:12">First Buy</p>
                    <p className="m-0 fz:14 fw-600">100 USDT</p>
                  </div>
                  <div className="nav jcb">
                    <p className="m-0 fz:12">Mode</p>
                    <p className="m-0 fz:14 fw-600">Professional</p>
                  </div>
                  <div className="nav jcb">
                    <p className="m-0 fz:12">Pair Trading</p>
                    <p className="m-0 fz:14 fw-600">6</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body nav aic jcc">
                  <div className="nav aic jcc flex-column">
                    <p className="m-0 fz:13">Bot Used:</p>
                    <p className="m-0 fz:14 fw-600">Expert</p>
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
              <div className="coin-group-flex">
                <div className="coin-icon"></div>
                <div className="d-block">
                  <h2 className="m-0 fz:16 fw-600 text-dark">Binance</h2>
                  <p className="m-0 fz:15 text-green">Bound</p>
                </div>
              </div>
              <div className="coin-group-flex">
                <div className="coin-icon"></div>
                <div className="d-block">
                  <h2 className="m-0 fz:16 fw-600 text-dark">Tokocrypto</h2>
                  <p className="m-0 fz:15 text-red">Unbound</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h2 className="mb-2 fz:14 fw-600 text-dark">
              Exchange Setting For Use
            </h2>
            <div className="box-grid:2 gap:2">
              <button className="btn-control btn-control-sm btn-control-primary-contained d-flex jcb is_active">
                <span>Binance</span>
                <span>On</span>
              </button>
              <button className="btn-control btn-control-sm btn-control-primary-contained d-flex jcb">
                <span>Tokocrypto</span>
                <span>Off</span>
              </button>
              <p className="m-0 fz:12 fw-600 text-mute">
                Total Balance : 31,000 USDT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSetting;
