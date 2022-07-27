import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Header from "../../components/Header/Header";

const APIBinding = (props) => {
  const backHistory = () => {
    window.history.back();
  };
  console.log(props);
  const location = useLocation();

  if (location.pathname == "/user/api-binding/binding-binance") {
    console.log("pathname: Binding Binance");
  } else if (location.pathname == "/user/api-binding/binding-tokocrypto") {
    console.log("pathname: Binding Tokocrypto");
  }

  const copyText = () => {
    var text = document.getElementById("ip-address").textContent;
    navigator.clipboard.writeText(text);
    alert("IP Address Copied");
  };

  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">
          {location.pathname == "/user/api-binding/binding-binance"
            ? "Binding Binance"
            : "Binding Tokocrypto"}
        </span>
      </header>
      <div className="dbhs-content">
        <div className="card card-elm-bordered mb-2 round-md">
          <div className="card-body pt-2 pb-2">
            <p className="mb-1 fz:14 fw-700 text-dark">Precautions</p>
            <p className="m-0 fz:11 fw-500 text-dark">
              1. Please confirm that the API permission has checked "Enable Spot
              & Margin Trading" <br />
              2. Please enter the correct API, please do not enter special
              characters
            </p>
          </div>
        </div>
        <div className="card card-elm-bordered mb-2 round-md">
          <div className="card-body pt-2 pb-2">
            <p className="mb-1 fz:12 fw-600 text-dark">IP group binding</p>
            <p className="m-0 fz:10 fw-500 text-dark">
              For security, Binance Exchange recommends binding the server IP
              address when creating the API. For users who need to bind the IP
              address, click Edit permissions in the upper right corner after
              the API is created, and click in the IP address permission column
              ti restrict access to only trusted IPs. (Recommended) option,
              click the copy button to copy the IP group to the input box and
              click OK, after adding, click save in the upper right corner.
            </p>
            <div className="input-copy mt-2">
              <h2
                className="m-0 fz:13 text-dark fw-500 sttr-text"
                id="ip-address"
              >
                560.332.861.730.318.120.226.990.217.283
              </h2>
              <button className="cpy-btn fz:17" onClick={copyText}>
                <i className="bx bx-copy"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-elm-bordered mb-2 round-md">
          <div className="card-body pt-2 pb-2">
            <div className="nav jcb aic mb-2" style={{ flexWrap: "nowrap" }}>
              <label
                className="fz:11 fw-600 text-dark"
                style={{ minWidth: "100px" }}
              >
                Access Key
              </label>
              <input
                type="text"
                className="input-control input-control-sm fz:1 fw-500"
                style={{
                  background: "transparent",
                  border: "1px solid var(--first-color)",
                }}
                placeholder="Pleace Enter Access Key here"
              />
            </div>
            <div className="nav jcb aic mb-2" style={{ flexWrap: "nowrap" }}>
              <label
                className="fz:11 fw-600 text-dark"
                style={{ minWidth: "100px" }}
              >
                Private Key
              </label>
              <input
                type="text"
                className="input-control input-control-sm fz:1 fw-500"
                style={{
                  background: "transparent",
                  border: "1px solid var(--first-color)",
                }}
                placeholder="Pleace Enter Access Key here"
              />
            </div>
            <div
              className="nav jcb aic"
              style={{ flexWrap: "nowrap", position: "relative" }}
            >
              <label
                className="fz:11 fw-600 text-dark"
                style={{ minWidth: "100px" }}
              >
                Verification Code
              </label>
              <input
                type="text"
                className="input-control input-control-sm fz:1 fw-500"
                style={{
                  background: "transparent",
                  border: "1px solid var(--first-color)",
                }}
                placeholder="Pleace Enter Access Key here"
              />
              <button type="button" className="btn-input-absolute fz:10">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="input-group mt-1">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="termcondition"
            />
            <label
              className="form-check-label fz:10 fw-500 text-mute cursor:pointer"
              htmlFor="termcondition"
            >
              I Have Read &nbsp;
              <span className="text-first">The RISK NOTICE Carefuly</span>
            </label>
          </div>
        </div>
        <div className="nav jcc aic">
          <button className="sc-sign-btn text-uppercase px-5 w-auto">
            Bind
          </button>
        </div>
      </div>
    </div>
  );
};

export default APIBinding;
