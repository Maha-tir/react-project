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
      metode: "Metode",
      jumlah: "13",
      harga: "$20",
      biaya: "$20",
      jumlahAkhir: "$40",
      tanggal: "20-02-2022",
      status: "Active",
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

        <div className="card" style={{ overflowX: "auto" }}>
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
              <div className="col-lg-7">
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
                        <option value="">Active</option>
                        <option value="">Disactive</option>
                      </select>
                    </div>
                  </div>
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
                  <th>Metode</th>
                  <th>Jumlah</th>
                  <th>Harga</th>
                  <th>Biaya</th>
                  <th>Jumlah Akhir</th>
                  <th>Tanggal</th>
                  <th>Status</th>
                </tr>
              </thead>
              {dataTable.length >= 1 ? (
                <tbody>
                  {dataTable.map((data, idx) => (
                    <tr key={idx}>
                      <td>{data.metode}</td>
                      <td>{data.jumlah}</td>
                      <td>{data.harga}</td>
                      <td>{data.biaya}</td>
                      <td>{data.jumlahAkhir}</td>
                      <td>{data.tanggal}</td>
                      <td>{data.status}</td>
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
