import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Header from "../../components/Header/Header";
import banner from "../../assets/img/banner.jpg";

import BTC from "../../assets/img/KOIN/BTC-non.png";
import ETH from "../../assets/img/KOIN/eth.jpg";
import BNB from "../../assets/img/KOIN/bnb.jpg";
import TTH from "../../assets/img/KOIN/teather.jpg";
import USDC from "../../assets/img/KOIN/usdc.jpg";

const slideImages = [
  {
    url: banner,
  },
  {
    url: banner,
  },
];

const coinData = [
  {
    id: 1,
    image: BTC,
    title: "BTC",
    subTitle: "Bitcoin",
    coinCap: "398,35B",
    subCoinCap: "41.35%",
    price: "20.892,56",
    subPrice: "+2.09%",
    type: "green",
  },
  {
    id: 2,
    image: ETH,
    title: "ETH",
    subTitle: "Ethereum",
    coinCap: "139,09B",
    subCoinCap: "14.43%",
    price: "20.892,56",
    subPrice: "+2.09%",
    type: "green",
  },
  {
    id: 3,
    image: TTH,
    title: "USDT",
    subTitle: "Tether",
    coinCap: "72,23B",
    subCoinCap: "7.49%",
    price: "0,999",
    subPrice: "-0.00%",
    type: "red",
  },
  {
    id: 4,
    image: USDC,
    title: "USDC",
    subTitle: "USD Coin",
    coinCap: "54,31B",
    subCoinCap: "5.63%",
    price: "1,0004",
    subPrice: "-0.02%",
    type: "red",
  },
  {
    id: 5,
    image: BNB,
    title: "BNB",
    subTitle: "BNB",
    coinCap: "37,73B",
    subCoinCap: "3.91%",
    price: "231,10",
    subPrice: "+3.98%",
    type: "green",
  },
];

const Dashboard = () => {
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
        <div className="card border-none">
          <div className="card-height-md bg-first">
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
          <table className="table mb-0 mt-3">
            <thead>
              <tr>
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
          </table>
          <table className="table table-responsive mt-0">
            <tbody>
              {coinData.map((coin, index) => (
                <tr key={index}>
                  <th scope="row" className="fw-500 fz:14">
                    {index}
                  </th>
                  <td>
                    <div className="coin-group-flex">
                      <div className="icon-coin icon-coin-lg">
                        <img src={coin.image} alt={coin.image} />
                      </div>
                      <div className="d-block">
                        <h2 className="m-0 fz:13 fw-600 text-dark">
                          {coin.title}
                        </h2>
                        <p className="m-0 fz:12 text-mute">{coin.subTitle}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="coin-group-block">
                      <h2 className="m-0 fz:13 fw-600 text-dark">
                        {coin.coinCap}
                      </h2>
                      <p className="m-0 fz:12 text-mute">{coin.subCoinCap}</p>
                    </div>
                  </td>
                  <td>
                    <div className="coin-group-block">
                      <h2 className={`m-0 fz:13 fw-600 text-${coin.type}`}>
                        {coin.price}
                      </h2>
                      <p className={`m-0 fz:12 text-${coin.type}`}>
                        {coin.subPrice}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
              {/* <tr>
                <th scope="row" className="fw-500 fz:14">
                  1
                </th>
                <td>
                  <div className="coin-group-flex">
                    <div className="icon-coin icon-coin-lg"></div>
                    <div className="d-block">
                      <h2 className="m-0 fz:13 fw-600 text-dark">BTC</h2>
                      <p className="m-0 fz:12 text-mute">Bitcoin</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:13 fw-600 text-dark">398,35B</h2>
                    <p className="m-0 fz:12 text-mute">41,35%</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:13 fw-600 text-green">20.892,56</h2>
                    <p className="m-0 fz:12 text-green">+2.09%</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="fw-500 fz:14">
                  2
                </th>
                <td>
                  <div className="coin-group-flex">
                    <div className="icon-coin icon-coin-lg"></div>
                    <div className="d-block">
                      <h2 className="m-0 fz:13 fw-600 text-dark">ETH</h2>
                      <p className="m-0 fz:12 text-mute">Ethereum</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:13 fw-600 text-dark">139,09B</h2>
                    <p className="m-0 fz:12 text-mute">14,43%</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:13 fw-600 text-green">20.892,56</h2>
                    <p className="m-0 fz:12 text-green">+2.09%</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="fw-500 fz:14">
                  3
                </th>
                <td>
                  <div className="coin-group-flex">
                    <div className="icon-coin icon-coin-lg"></div>
                    <div className="d-block">
                      <h2 className="m-0 fz:13 fw-600 text-dark">USDT</h2>
                      <p className="m-0 fz:12 text-mute">Tether</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:13 fw-600 text-dark">72,24B</h2>
                    <p className="m-0 fz:12 text-mute">7,49%</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:13 fw-600 text-red">0,999</h2>
                    <p className="m-0 fz:12 text-red">-0.00%</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="fw-500 fz:14">
                  4
                </th>
                <td>
                  <div className="coin-group-flex">
                    <div className="icon-coin icon-coin-lg"></div>
                    <div className="d-block">
                      <h2 className="m-0 fz:13 fw-600 text-dark">USDC</h2>
                      <p className="m-0 fz:12 text-mute">USD Coin</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:13 fw-600 text-dark">54,31B,09B</h2>
                    <p className="m-0 fz:12 text-mute">5,63%</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:13 fw-600 text-green">20.892,56</h2>
                    <p className="m-0 fz:12 text-green">+2.09%</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="fw-500 fz:14">
                  5
                </th>
                <td>
                  <div className="coin-group-flex">
                    <div className="icon-coin icon-coin-lg"></div>
                    <div className="d-block">
                      <h2 className="m-0 fz:13 fw-600 text-dark">USDC</h2>
                      <p className="m-0 fz:12 text-mute">USD Coin</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:13 fw-600 text-dark">54,31B,09B</h2>
                    <p className="m-0 fz:12 text-mute">5,63%</p>
                  </div>
                </td>
                <td>
                  <div className="coin-group-block">
                    <h2 className="m-0 fz:13 fw-600 text-green">20.892,56</h2>
                    <p className="m-0 fz:12 text-green">+2.09%</p>
                  </div>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
