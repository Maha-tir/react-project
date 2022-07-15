import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";

import Indonesia from "../../assets/img/flag/indonesia.png";

const Signup = () => {
  const country = [
    {
      id: 1,
      name_country: "indonesia",
      flag: Indonesia,
    },
  ];
  return (
    <div className="sc-sign-up">
      <div className="sc-content-all">
        <h2 className="sttr-text fz:22 text-center">Welcome You To Join</h2>
        <form action="" className="form-validation">
          <div className="input-group">
            <label className="input-label">Country</label>
            <select className="form-select">
              <option defaultValue="0" selected disabled className="selected">
                Select your country
              </option>
              {country.map((country, index) => (
                // <option value={index}>
                //   <div className="icon">
                //     <img src={country.flag} alt="" />
                //   </div>
                //   {country.name_country}
                // </option>
                <option className="option" key={index}>
                  <img src={country.flag} alt="" />
                  {country.name_country}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label className="input-label">Time Zone</label>
            <select className="form-select">
              <option defaultValue="0" selected disabled className="selected">
                Select your time zone
              </option>
              {country.map((country, index) => (
                // <option value={index}>
                //   <div className="icon">
                //     <img src={country.flag} alt="" />
                //   </div>
                //   {country.name_country}
                // </option>
                <option className="option" key={index}>
                  <img src={country.flag} alt="" />
                  {country.name_country}
                </option>
              ))}
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
            <label className="input-label">Email</label>
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
            <label className="input-label">Sponsor</label>
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
                I Have Read Term & Conditions
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
