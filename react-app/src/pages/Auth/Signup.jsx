import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();
  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
      });
      history.push("/auth/signin");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="sc-ShXmqw XjkQw">
      <div className="auth-box auth-signup">
        <header className="auth-header">
          <div className="mb-3 d-flex align-items-center justify-content-center">
            <h1 className="m-0" style={{ fontSize: "25px", fontWeight: 600 }}>
              AdminTrader
            </h1>
          </div>
          <p
            className="m-0"
            style={{ fontSize: "16px", fontWeight: 600, color: "#363c42" }}
          >
            Adventure starts here 🚀
          </p>
          <p className="m-0" style={{ fontSize: "14px" }}>
            Make your app management easy and fun!
          </p>
        </header>
        {msg && (
          <div
            className="alert alert-danger d-flex align-items-center"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            <div className="icon-flex">
              <i
                className="fa-regular fa-circle-xmark me-2"
                style={{ fontSize: "15px", top: "1px", position: "relative" }}
              ></i>
            </div>
            {msg}
          </div>
        )}
        <form onSubmit={Register} className="auth-form" id="form-validation">
          <div className="row">
            <div className="col-sm-6">
              <div className="input-field">
                <label className="all-label" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  className="input-action"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-field">
                <label className="all-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email.example@gmail.com"
                  className="input-action"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/* <div className="col-sm-6">
              <div className="input-field">
                <label className="all-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="email.example@gmail.com"
                  className="input-action"
                  required
                />
              </div>
            </div> */}
          </div>
          <div className="input-field">
            <label className="all-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              className="input-action"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="row mb-3">
            <div className="col-lg-6">
              <p
                className="text-mute m-0"
                style={{ fontSize: "12px", fontWeight: 500 }}
              >
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
            </div>
          </div>

          <div className="nav-auth">
            <button type="submit" className="sc-SignLs UpxaWq">
              Sign Up
            </button>
          </div>
        </form>
        <p
          className="my-2 text-center pb-4"
          style={{ fontSize: "13px", fontWeight: 500 }}
        >
          Already have an account?
          <Link to="/auth/signin" className="text-link-first">
            {" "}
            Sign In instead
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
