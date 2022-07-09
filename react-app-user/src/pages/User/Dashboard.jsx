import React from "react";
import Header from "../../components/Header/Header";

const Dashboard = () => {
  return (
    <div className="sc-dbhs">
      <Header />
      <div className="dbhs-content">
        <div className="card mb-2">
          <div className="card-height-lg"></div>
        </div>
        <div className="card">
          <div className="card-height-md bg-primary">
            <div className="card-body row h:100">
              <div className="box-grid:4">
                <div className="nav flex-column justify-content-center">
                  <p className="m-0 fz:12 text-white">Total Cap</p>
                  <h2 className="m-0 fz:17 fw-600 text-white">6969.69 B</h2>
                </div>
                <div className="nav flex-column justify-content-center">
                  <p className="m-0 fz:12 text-white">24H</p>
                  <h2 className="m-0 fz:17 fw-600 text-white">+6.9%</h2>
                </div>
                <div className="nav flex-column justify-content-center">
                  <p className="m-0 fz:12 text-white">7D</p>
                  <h2 className="m-0 fz:17 fw-600 text-white">-9.6%</h2>
                </div>
                <div className="nav flex-column justify-content-center">
                  <p className="m-0 fz:12 text-white">30D</p>
                  <h2 className="m-0 fz:17 fw-600 text-white">-69%</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-overflow">
          <table className="table table-responsive mt-3">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" className="fw-400 fz:13">
                  Rank/Coin
                </th>
                <th scope="col" className="fw-400 fz:13">
                  CoinCap/Occupation
                </th>
                <th scope="col" className="fw-400 fz:13">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <div className="coin-group-flex">
                    <div className="coin-icon"></div>
                    <div className="d-block">
                      <h2 className="m-0 fz:14 fw-600 text-dark">BTC</h2>
                      <p className="m-0 fz:12 text-mute">Bitcoin</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:14 fw-600 text-dark">398,35B</h2>
                    <p className="m-0 fz:12 text-mute">41,35%</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:14 fw-600 text-green">20.892,56</h2>
                    <p className="m-0 fz:12 text-green">+2.09%</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  <div className="coin-group-flex">
                    <div className="coin-icon"></div>
                    <h2 className="m-0 fz:14 fw-600 text-dark">ETH</h2>
                    <p className="m-0 fz:12 text-mute">Ethereum</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:14 fw-600 text-dark">139,09B</h2>
                    <p className="m-0 fz:12 text-mute">14,43%</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:14 fw-600 text-green">20.892,56</h2>
                    <p className="m-0 fz:12 text-green">+2.09%</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  <div className="coin-group-flex">
                    <div className="coin-icon"></div>
                    <h2 className="m-0 fz:14 fw-600 text-dark">USDT</h2>
                    <p className="m-0 fz:12 text-mute">Tether</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:14 fw-600 text-dark">72,24B</h2>
                    <p className="m-0 fz:12 text-mute">7,49%</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:14 fw-600 text-red">0,999</h2>
                    <p className="m-0 fz:12 text-red">-0.00%</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  <div className="coin-group-flex">
                    <div className="coin-icon"></div>
                    <h2 className="m-0 fz:14 fw-600 text-dark">USDC</h2>
                    <p className="m-0 fz:12 text-mute">USD Coin</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:14 fw-600 text-dark">54,31B,09B</h2>
                    <p className="m-0 fz:12 text-mute">5,63%</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:14 fw-600 text-green">20.892,56</h2>
                    <p className="m-0 fz:12 text-green">+2.09%</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  <div className="coin-group-flex">
                    <div className="coin-icon"></div>
                    <h2 className="m-0 fz:14 fw-600 text-dark">USDC</h2>
                    <p className="m-0 fz:12 text-mute">USD Coin</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:14 fw-600 text-dark">54,31B,09B</h2>
                    <p className="m-0 fz:12 text-mute">5,63%</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:14 fw-600 text-green">20.892,56</h2>
                    <p className="m-0 fz:12 text-green">+2.09%</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;