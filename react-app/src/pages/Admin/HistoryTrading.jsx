import React, { useState } from "react";
import noData from "../../assets/img/nodata.svg";

import "../../style/dashboard.css";

const HistoryTrading = () => {
  const [toggleState, setToggleState] = useState(1);

  const tabButton = (index) => {
    setToggleState(index);
  };

  const dataTable = [
    {
      id: 1,
      waktu: "01-01-2022",
      mode: "Professional",
      pair: "BTC/USDT",
      exchange: "Binance",
      hargaBeli: "1.000",
      hargaJual: "1.015",
      PersenProfit: "1,5",
      status: "Success",
      profit: "1 USDT",
    },
    {
      id: 2,
      waktu: "02-01-2022",
      mode: "Professional",
      pair: "BTC/USDT",
      exchange: "Binance",
      hargaBeli: "2.000",
      hargaJual: "2.015",
      PersenProfit: "2,5",
      status: "Pending",
      profit: "2 USDT",
    },
    {
      id: 3,
      waktu: "03-01-2022",
      mode: "Standart",
      pair: "BTC/USDT",
      exchange: "Tokocrypto",
      hargaBeli: "2.000",
      hargaJual: "2.015",
      PersenProfit: "2,5",
      status: "Cut Loss",
      profit: "2 USDT",
    },
    {
      id: 4,
      waktu: "04-01-2022",
      mode: "Professional",
      pair: "BTC/USDT",
      exchange: "Binance",
      hargaBeli: "2.000",
      hargaJual: "2.015",
      PersenProfit: "2,5",
      status: "Cancel",
      profit: "2 USDT",
    },
    // {
    //   id: 2,
    //   metode: "Metode",
    //   jumlah: "10",
    //   harga: "$10",
    //   biaya: "$50",
    //   jumlahAkhir: "$60",
    //   tanggal: "20-05-2022",
    //   status: "Active",
    // },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <p className="nav-crumbs">Riwayat Beli/Jual</p>
        </div>
        <div className="col-md-6"></div>

        <div className="card">
          <div className="card-header">
            <ul className="nav">
              <li
                className={
                  toggleState === 1 ? "button-tabs active" : "button-tabs"
                }
              >
                <button className="btn-tabs" onClick={() => tabButton(1)}>
                  Beli
                </button>
              </li>
              <li
                className={
                  toggleState === 2 ? "button-tabs active" : "button-tabs"
                }
              >
                <button className="btn-tabs" onClick={() => tabButton(2)}>
                  Jual
                </button>
              </li>
            </ul>
            <div className="row my-3">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="input-field">
                      <label>Crypto</label>
                      <select name="" id="" className="form-select">
                        <option value="">All</option>
                        <option value="">BTC/USDT</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="input-field">
                      <label>Tanggal</label>
                      <select name="" id="" className="form-select">
                        <option value="">30 hari terakhir</option>
                        <option value="">7 hari terakhir</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="input-field">
                      <label>Status</label>
                      <select name="" id="" className="form-select">
                        <option value="">Semua</option>
                        <option value="">Succes</option>
                        <option value="">Pending</option>
                        <option value="">Cut Loss</option>
                        <option value="">Buy</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="d-inline-flex align-items-center h:100 w:100 jce gap:2">
                  <button className="btn">Reset</button>
                  <button className="btn btn-warning">Cari</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 1 ? "content-tabs active" : "content-tabs"
            }
          >
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>Waktu</th>
                  <th>Mode</th>
                  <th>Pair</th>
                  <th>Exhcange</th>
                  <th>Harga Beli</th>
                  <th>Harga Jual</th>
                  <th>Persen Profit</th>
                  <th>Status</th>
                  <th>Profit</th>
                </tr>
              </thead>
              {dataTable.length >= 1 ? (
                <tbody>
                  {dataTable.map((data, idx) => (
                    <tr key={idx}>
                      <td>{data.waktu}</td>
                      <td>{data.mode}</td>
                      <td>{data.pair}</td>
                      <td>{data.exchange}</td>
                      <td>{data.hargaBeli}</td>
                      <td>{data.hargaJual}</td>
                      <td>{data.PersenProfit}</td>
                      <td className={`text-${data.status}`}>{data.status}</td>
                      <td>{data.profit}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <div className="not-found-elm">
                  <img src={noData} alt="_error-not-found" />
                  <p>Tidak ada data</p>
                </div>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTrading;
