import React, { useState } from "react";
import Logo from "../../assets/img/BIDBOX-LOGO-NEW.png";

import { Link } from "react-router-dom";

import "../../styles/auth.css";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="sc-sign-in">
      <div className="sc-content-img">
        <img src={Logo} alt="_Bidobox-Logo" />
      </div>
      <div className="sc-content">
        <h2 className="sttr-text fz:22">Sign In</h2>
        <form action="" className="form-validation pt-2">
          <div className="input-group">
            <div className="input-field icon-right">
              <input
                type="text"
                id="email"
                placeholder="example@gmail.com"
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
          <button className="sc-sign-btn round-lg py-2">Sign In</button>
          <div className="my-2 text-center">
            <p className="fz:14 text-mute fw-500">
              Dont have an account?{" "}
              <Link to="/auth/signup" className="text-link fz:14">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
