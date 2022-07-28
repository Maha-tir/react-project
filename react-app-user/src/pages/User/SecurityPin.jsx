import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import Taost from "../../components/ToastAlert/Taost";
import axios from "axios";

const SecurityPin = () => {
    const [secOldPin, setOldSecPin] = useState(null);
    const [secPin, setSecPin] = useState(null);
    const [secPinConfirm, setSecPinConfirm] = useState(null);
    const [otp, setOtp] = useState(null);
    const [alert, setAlert] = useState(null);
    const auth = useSelector((state) => state.auth);

    const showAlert = () => {
        if (alert !== null) {
            return (
                <Taost
                    message={alert.message}
                    position="middle-top"
                    type={alert.type}
                />
            );
        }
    };
    const get_otp = () => {
        var config = {
            method: "get",
            url: "http://159.223.94.86:3000/strict/user/request-otp",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.token}`,
            }
        };
        axios(config)
            .then(function (response) {
                setOtp(response.data['otp']);
            })
            .catch(function (error) {
                const response = error.response;
                let message_error = response.data.message;
                if (message_error === "") {
                    message_error = "Server Internal Error";
                }
                console.log(error);
                setAlert({
                    type: "danger",
                    message: message_error,
                });
            });
    };
    const changeSecurity = () => {
        if (
            secOldPin === null ||
            secPin === null ||
            secPinConfirm == null ||
            otp === null
        ) {
            setAlert({
                type: "danger",
                message: "please complete the form below",
            });
        } else {
            setAlert({
                type: "default",
                message: "Loading...",
            });
            let data = JSON.stringify({
                new_security_pin: parseInt(secPin),
                new_security_pin_repeat: parseInt(secPinConfirm),
                otp: otp,
                security_pin: parseInt(secOldPin),
            });

            var config = {
                method: "post",
                url: "http://159.223.94.86:3000/strict/user/change-security-pin",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.token}`,
                },
                data: data,
            };

            axios(config)
                .then(function (response) {
                    setAlert({
                        type: "success",
                        message: "Change Security PIN is successful",
                    });
                })
                .catch(function (error) {
                    const response = error.response;
                    let message_error = response.data.message;
                    if (message_error === "") {
                        message_error = "Server Internal Error";
                    }
                    console.log(error);
                    setAlert({
                        type: "danger",
                        message: message_error,
                    });
                });
        }
    };
    const backHistory = () => {
        window.history.back();
    };
    return (
        <div className="sc-dbhs">
            {showAlert()}
            <header className="or-header">
                <button className="back-button me-auto" onClick={backHistory}>
                    <i className="fa-solid fa-angle-left back-icon"></i>
                </button>
                <span className="text-uppercase fw-500 me-auto">
                    Security Pin
                </span>
            </header>
            <div className="dbhs-content">
                <div className="input-group">
                    <div className="input-field not-icon mt-0">
                        <input
                            type="password"
                            onChange={(evt) => setOldSecPin(evt.target.value)}
                            placeholder="Please enter a 6 - digit Old PIN"
                            className="input-control"
                            required
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-field not-icon mt-0">
                        <input
                            type="password"
                            onChange={(evt) => setSecPin(evt.target.value)}
                            placeholder="Please enter a 6 - digit PIN"
                            className="input-control"
                            required
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-field not-icon mt-0">
                        <input
                            type="password"
                            onChange={(evt) =>
                              setSecPinConfirm(evt.target.value)
                            }
                            placeholder="Re-enter a 6 - digit PIN"
                            className="input-control"
                            required
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-field not-icon mt-0">
                        <input
                            type="text"
                            id="order-id"
                            onChange={(evt) => setOtp(evt.target.value)}
                            placeholder="Input OTP Code"
                            className="input-control"
                            value={otp}
                            required
                        />
                        <button
                            type="button"
                            className="btn-input-absolute fz:13 px-3 text-dark border-none bg-gray fw:300 text-uppercase me-1"
                            style={{ height: "27px" }}
                            onClick={get_otp}
                        >
                            Get OTP
                        </button>
                    </div>
                </div>

                <div className="mt-2">
                    <button
                        type="button"
                        onClick={changeSecurity}
                        className="sc-sign-btn text-uppercase mt-3"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default connect()(SecurityPin);
