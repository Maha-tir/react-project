import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import sendImage from "../../assets/img/send-email.svg";
import "../../styles/auth.css";
import Taost from "../../components/ToastAlert/Taost";
import axios from "axios";
const ForgotPassword = () => {
    const history = useHistory();
    const [alert, setAlert] = useState(null);
    const [email, setEmail] = useState(null);
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
    const backToLogin = () => {
        history.push("/auth/signin");
    };

    const request_otp = () => {
        if (email === null) {
            setAlert({
                type: "danger",
                message: "please enter your email",
            });
        } else {
            let data = JSON.stringify({
                email: email,
            });

            var config = {
                method: "post",
                url: "http://159.223.94.86:3000/auth/request-password-reset",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };
            axios(config)
                .then(function (response) {
                  setAlert({
                      type: "success",
                      message: "We have sent the password reset link to your email",
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

    return (
        <div className="sc-forgot-with-header">
            {showAlert()}
            <header className="or-header">
                <button className="back-button me-auto" onClick={backToLogin}>
                    <i className="fa-solid fa-angle-left back-icon"></i>
                </button>
            </header>
            <div className="d-flex align-items-center flex-column mt-4">
                <h2 className="sttr-text fz:20">Reset Password</h2>
            </div>

            <form action="" className="form-validation pt-2">
                <div className="input-group">
                    <div className="input-field not-icon">
                        <input
                            type="text"
                            id="email"
                            onChange={(evt) => setEmail(evt.target.value)}
                            placeholder="example@gmail.com"
                            className="input-control"
                            required
                        />
                    </div>
                </div>
                <button
                    type="button"
                    onClick={request_otp}
                    className="sc-sign-btn"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
