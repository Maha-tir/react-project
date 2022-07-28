import React, { useEffect, useState } from "react";
import Logo from "../../assets/img/BIDBOX-LOGO-NEW.png";

import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";

import Taost from "../../components/ToastAlert/Taost";
import axios from "axios";

const Signin = (props) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState(null);
    const auth = useSelector((state) => state.auth);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
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
    const save_session = (jwt_token,refresh_token) => {
        
        const items = JSON.stringify({
            'token' : jwt_token,
            'refresh_token' : refresh_token
        })
        localStorage.setItem("bidbox_auth_info",items)
        dispatch({
            type:'auth/SET_STATE',
            payload:{
                loading:false,
                token:jwt_token,
                refresh_token:refresh_token
            }
        })
        
    }
    const doLogin = () => {
        if (email.trim() === "" || password.trim() === "") {
            setAlert({
                type: "danger",
                message: "Please enter your email and password",
            });
        } else {
            setAlert({
                type:'default',
                message:'Loading...'
            })
            let data = JSON.stringify({
                "captcha": "iuieys",
                "email": email,
                "password": password
            });

            var config = {
                method: "post",
                url: "http://159.223.94.86:3000/auth/login",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };
            
            axios(config)
            .then(function (response) {
                save_session(response.data.jwt_token,response.data.jwt_refresh_token)
            })
            .catch(function (error) {
                const response = error.response
                console.log(error);
                setAlert({
                    type:'danger',
                    message:response.data.message
                })
            });
        }
    };

    return (
        <div className="sc-sign-in">
            {showAlert()}
            <div className="sc-content-img">
                <img src={Logo} alt="_Bidobox-Logo" />
            </div>
            <div className="sc-content">
                <h2 className="sttr-text fz:22">Sign In</h2>
                <form action="" className="form-validation pt-2">
                    <div className="input-group">
                        <div className="input-field icon-right">
                            <input
                                onChange={(evt) => setEmail(evt.target.value)}
                                type="text"
                                id="email"
                                placeholder="Email"
                                className="input-control input-control-lg"
                                required
                            />
                            <i className="fa-solid fa-user icon-absolute-right"></i>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-field icon-right">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                onChange={(evt) =>
                                    setPassword(evt.target.value)
                                }
                                placeholder="Your password"
                                className="input-control input-control-lg"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="icon-absolute-right"
                            >
                                <i
                                    className={
                                        showPassword
                                            ? "fa-regular fa-eye"
                                            : "fa-regular fa-eye-slash"
                                    }
                                ></i>
                            </button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mb-3 mt-2">
                        <Link
                            to="/auth/forgot-password"
                            className="text-link text-dark-hover fz:14 fw-500"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <button
                        type="button"
                        className="sc-sign-btn round-lg py-2"
                        onClick={doLogin}
                    >
                        Sign In
                    </button>
                    <div className="my-2 text-center">
                        <p className="fz:14 text-mute fw-500">
                            No Account yet?
                            <Link to="/auth/signup" className="text-link fz:14">
                                Register Now
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default connect()(Signin);
