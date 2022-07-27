import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import "../../styles/auth.css";

import Indonesia from "../../assets/img/flag/indonesia.png";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [userPhone, setUserPhone] = useState("");

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const [otp, setOtp] = useState("");

  const [country, setCountry] = useState([]);
  const [isCountry, setIsCountry] = useState("");

  const [timezone, setTimezone] = useState([]);
  const [isTimezone, setIsTimezone] = useState("");
  const [loading, setLoading] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  let history = useHistory();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    getCountry();
  }, []);
  useEffect(() => {
    getTimezone();
  }, []);

  const getCountry = async () => {
    try {
      const res = await axios.get("http://159.223.94.86:3000/site/countries");
      setCountry(res.data.countries);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimezone = async () => {
    try {
      const res = await axios.get("http://159.223.94.86:3000/site/timezones");
      setTimezone(res.data.timezones);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  const selectCountry = (e) => {
    try {
      const value = e.target.value;
      setIsCountry(value);
      console.log(value);
    } catch (error) {
      console.log(error);
    }
  };

  const selectTimezone = (e) => {
    console.log(e.target.value);
    setIsTimezone(e.target.value);
  };

  const handleValidPassword = (e) => {
    if (pwd.length < 8) {
      setValidPwd("");
    } else {
      const setvalid = setPwd(pwd);
      console.log(setvalid);
    }
  };

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var OTPdata = JSON.stringify({
    address: userEmail,
    taget: 0,
  });

  var OTPRequest = {
    method: "POST",
    headers: myHeaders,
    body: OTPdata,
    redirect: "follow",
  };

  var otpInput = document.getElementById("otp-email");
  const requestOTP = () => {
    if (userEmail.length == 0) {
      alert("Email address is required");
    } else {
      fetch("http://159.223.94.86:3000/auth/request-otp", OTPRequest)
        .then((response) => response.text())
        .then((result) => {
          console.log(result.replace(/['"]+/g, ""));
          otpInput.setAttribute("value", result.replace(/['"]+/g, ""));
          setOtp(result.replace(/['"]+/g, ""));
        })
        .catch((error) => console.log("error", error));
    }
  };

  var USERData = JSON.stringify({
    captcha: "iuieys",
    country: isCountry,
    email: userEmail,
    full_name: user,
    otp: otp,
    password: pwd,
    password_repeat: pwd,
    phone: userPhone,
    referrer_username: "hgT6Hd7Hs0GeT6jdGf",
    security_pin: 123456,
    security_pin_repeat: 123456,
    timezone: isTimezone,
    username: user,
  });

  var config = {
    method: "POST",
    headers: myHeaders,
    body: USERData,
    redirect: "follow",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://159.223.94.86:3000/auth/signup", config)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setUser("");
    setIsCountry("");
    setIsTimezone("");
    setPwd("");
    setMatchPwd("");
    setUserEmail("");
    setUserPhone("");
    setOtp("");
    history.push("/auth/signin");
  };

  return (
    <div className="sc-sign-up">
      <div className="sc-content-all">
        <h2 className="sttr-text fz:22 text-center">Welcome You To Join</h2>
        <form onSubmit={handleSubmit} className="form-validation">
          <div className="input-group">
            <label className="input-label">Country</label>
            <select
              className="form-select"
              id="select-country"
              value={isCountry}
              onChange={selectCountry}
            >
              <option className="selected">Select your country</option>
              {country.map((country, index) => (
                <option
                  className="option"
                  value={country.id}
                  id={country.id}
                  key={index}
                >
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label className="input-label">Time Zone</label>
            <select className="form-select" onChange={selectTimezone}>
              <option className="selected">Select your time zone</option>
              {timezone.map((timezone, index) => (
                <option
                  className="option"
                  id={timezone.country_code}
                  key={index}
                >
                  {timezone.timezone}
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
                autoComplete="off"
                className="input-control"
                ref={userRef}
                value={user}
                aria-invalid={validName ? "false" : "true"}
                onChange={(e) => setUser(e.target.value)}
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
                value={pwd}
                aria-invalid={validPwd ? "false" : "true"}
                onChange={(e) => setPwd(e.target.value)}
                onKeyUp={handleValidPassword}
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
                value={matchPwd}
                aria-invalid={validMatch ? "false" : "true"}
                onChange={(e) => setMatchPwd(e.target.value)}
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
                value={userEmail}
                aria-invalid={validEmail ? "false" : "true"}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-group mb-1">
            <label className="input-label">Phone</label>
            <div className="input-field not-icon">
              <input
                type="number"
                id="phone"
                placeholder="Phone Number"
                className="input-control"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
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
                  readOnly
                  required
                />
              </div>
            </div>
            <div className="input-group-2">
              <button type="button" className="sc-get-btn" onClick={requestOTP}>
                Get OTP
              </button>
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
              Already have account ?
              <Link
                to="/auth/signin"
                className="text-link fz:14 ms-1 text-uppercase"
              >
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
