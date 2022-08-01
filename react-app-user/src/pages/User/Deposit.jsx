import React, { useEffect, useState } from "react";
import QREXAMPLE from "../../assets/img/chart-example.png";
import { connect, useDispatch, useSelector } from "react-redux";
import {QRCodeSVG} from 'qrcode.react';
import axios from 'axios'
const Deposit = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const wallet = useSelector((state) => state.wallet);

    const generate_address = () => {
        var config = {
            method: "get",
            url: "http://159.223.94.86:3000/strict/wallet/generate-address",
            headers: {
                Authorization: `Bearer ${auth.token}`,
            },
        };

        axios(config)
            .then(function (response) {
                const data = response.data;
                dispatch({
                  type:'wallet/SET_STATE',
                  payload:data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(() => {
        if (wallet.address == null) {
            generate_address();
        }
    }, []);
    const backHistory = () => {
        window.history.back();
    };

    const copyText = () => {
        navigator.clipboard.writeText(wallet.address);
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
                          <QRCodeSVG className="qr-image" style={{padding:10}} value={wallet.address} />
                            {/* <img
                                src={QREXAMPLE}
                                alt="_qr-user"
                                className="qr-image"
                            /> */}
                        </div>
                    </div>
                    <div className="wallet-address mb-3">
                        <p className="mb-1 fz:11 text-mute sttr-text">
                            Wallet Address
                        </p>
                        <h2
                            className="m-0 fz:15 fw-600 sttr-text text-dark"
                            id="wallet-address"
                        >
                            {wallet.address}
                        </h2>
                        <button
                            className="cpy-btn wallet-btn"
                            onClick={copyText}
                        >
                            <i className="bx bx-copy"></i>
                        </button>
                    </div>
                    <p className="mb-2 fz:14 fw-500">Precautions</p>
                    <p className="fz:13 fw-500">
                        1. Please do not deposit any non-USDT assets to the
                        address above. <br />
                        2. Ensure you use TRC20 chain to deposit, or assets
                        might be lost. <br />
                        3. The Deposit may take a short while to arrive. <br />
                        4. Funds may not be withdrawn from inactive accounts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default connect()(Deposit);
