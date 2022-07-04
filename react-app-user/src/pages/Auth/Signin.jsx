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
        <h2 className="sttr-text fz:22">Welcome back!</h2>
        <p className="sttr-text fz:15">Sign In to your account</p>
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
              <i class="fa-regular fa-user input-icon"></i>
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
              <i class="bx bx-lock-alt input-icon"></i>
            </div>
          </div>
          <div className="d-flex justify-content-end my-3">
            <Link to="/forgot-password" className="text-link">
              Forgot Passowrd ?
            </Link>
          </div>
          <button className="sc-sign-btn">Sign In</button>
          <div className="my-2 text-center">
            <p className="fz:15 text-mute fw-500">
              Dont have an account?{" "}
              <Link to="/signup" className="text-link fz:14">
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
