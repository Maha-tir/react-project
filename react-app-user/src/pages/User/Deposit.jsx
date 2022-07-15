import React, { useEffect } from "react";
import QREXAMPLE from "../../assets/img/chart-example.png";
const Deposit = () => {
  const backHistory = () => {
    window.history.back();
  };

  const copyText = () => {
    var text = document.getElementById("wallet-address").textContent;
    // text.select();
    // text.setSelcetionRange(0, 99999);

    navigator.clipboard.writeText(text);

    alert("Wallet Address Copied");
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Deposit</span>
      </header>
      <div className="dbhs-content">
        <div className="nav nav-column">
          <h2 className="mb-2 fz:15 fw-600 text-dark text-center text-uppercase">
            USDT-TRC20 ONLY
          </h2>
          <div className="nav justify-content-center">
            <div className="qr-square">
              <img src={QREXAMPLE} alt="_qr-user" className="qr-image" />
            </div>
          </div>
          <div className="wallet-address mb-3">
            <p className="mb-1 fz:11 text-mute sttr-text">Wallet Address</p>
            <h2
              className="m-0 fz:15 fw-600 sttr-text text-dark"
              id="wallet-address"
            >
              e6OO9reBJTMdpZtA3f5x41yNvm1U33W8Wi2qkiUW
            </h2>
            <button className="cpy-btn wallet-btn" onClick={copyText}>
              <i className="bx bx-copy"></i>
            </button>
          </div>
          <p className="mb-2 fz:14 fw-500">Precautions</p>
          <p className="fz:13 fw-500">
            1. Please do not deposit any non-USDT assets to the address above.{" "}
            <br />
            2. Ensure you use TRC20 chain to deposit, or assets might be lost.{" "}
            <br />
            3. The Deposit may take a short while to arrive. <br />
            4. Funds may not be withdrawn from inactive accounts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
