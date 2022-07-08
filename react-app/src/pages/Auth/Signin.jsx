import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../../style/auth.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  // const Login = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:5000/login", {
  //       email: email,
  //       password: password,
  //     });
  //     history.push("/admin/dashboard");
  //   } catch (error) {
  //     if (error.response) {
  //       setMsg(error.response.data.msg);
  //     }
  //   }
  // };
  return (
    <div className="sc-ShXmqw XjkQw">
      <div className="auth-box auth-signin">
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
            Welcome to AdminTrader! 👋🏻
          </p>
          <p className="m-0" style={{ fontSize: "14px" }}>
            Please sign-in to your account and start the adventure
          </p>
        </header>
        <form className="auth-form" id="form-validation">
          {/* {msg && (
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
          )} */}
          <div className="input-field">
            <label className="all-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              placeholder="email.example@gmail.com"
              className="input-action"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label className="all-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              className="input-action"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex align-items-center mb-3">
            <Link
              to="/auth/forgot-password"
              className="text-link-first"
              style={{ fontSize: "14px" }}
            >
              Forgot Password?
            </Link>
          </div>

          <button className="sc-SignFx XamWr">Sign In</button>
        </form>
        <p
          className="my-2 text-center pb-4"
          style={{ fontSize: "13px", fontWeight: 500 }}
        >
          New on our platform?{" "}
          <Link to="/auth/signup" className="text-link-first">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
