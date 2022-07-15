import React from "react";
import Logo from "../../assets/img/BIDBOX-LOGO-NEW.png";

import { Link } from "react-router-dom";

import "../../styles/auth.css";

const Signin = () => {
  return (
    <div className="sc-sign-in">
      <div className="sc-content-img">
        <img src={Logo} alt="_Bidobox-Logo" />
      </div>
      <div className="sc-content">
        <h2 className="sttr-text fz:22">Sign In</h2>
        <form action="" className="form-validation">
          <div className="input-group">
            <label className="input-label">Email address</label>
            <div className="input-field">
              <input
                type="text"
                id="email"
                placeholder="example@gmail.com"
                className="input-control"
                required
              />
              <i className="fa-regular fa-user input-icon"></i>
            </div>
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <div className="input-field">
              <input
                type="password"
                id="password"
                placeholder="Your password"
                className="input-control"
                required
              />
              <i className="bx bx-lock-alt input-icon"></i>
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
          <button className="sc-sign-btn">Sign In</button>
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
