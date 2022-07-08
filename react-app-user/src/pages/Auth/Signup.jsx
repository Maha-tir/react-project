import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";
const Signup = () => {
  return (
    <div className="sc-sign-up">
      <div className="sc-content-all">
        <h2 className="sttr-text fz:22">Let's Get Started!</h2>
        <p className="sttr-text fz:15">Create an account and be a part of us</p>
        <form action="" className="form-validation">
          <div className="input-group">
            <select className="form-select">
              <option selected disabled className="selected">
                Select your country
              </option>
              <option value="1">Indonesia</option>
              <option value="2">United States</option>
              <option value="3">Arabic</option>
            </select>
          </div>
          <div className="input-group">
            <div className="input-field not-icon">
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="input-control"
                required
              />
            </div>
          </div>
          <div className="input-group mb-1">
            <div className="input-field not-icon">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="input-control"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field not-icon">
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm password"
                className="input-control"
                required
              />
            </div>
          </div>
          <div className="input-group mb-1">
            <div className="input-field not-icon">
              <input
                type="text"
                id="email"
                placeholder="example@gmail.com"
                className="input-control"
                required
              />
            </div>
          </div>
          <div className="flex-input-group">
            <div className="input-group">
              <div className="input-field not-icon">
                <input
                  type="text"
                  id="otp-email"
                  placeholder="OTP Email"
                  className="input-control"
                  required
                />
              </div>
            </div>
            <div className="input-group-2">
              <button className="sc-get-btn">Get OTP</button>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field not-icon">
              <input
                type="text"
                id="sponsor"
                placeholder="Sponsor Username"
                className="input-control"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="termcondition"
              />
              <label
                className="form-check-label fz:14 text-mute cursor:pointer"
                htmlFor="termcondition"
              >
                I Have Read Term & Condition
              </label>
            </div>
          </div>
          <button className="sc-sign-btn">Sign Up</button>
          <div className="my-2 text-center">
            <p className="fz:15 text-mute fw-500">
              Already have an account ?
              <Link to="/auth/signin" className="text-link fz:14 ms-1">
                Sign In here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
