import React from "react";
import { Link } from "react-router-dom";
const BottomBar = () => {
  return (
    <nav className="bottom-bar">
      <ul className="navbar-menu">
        <li className="navbar-list">
          <Link to="/user/dashboard" className="navbar-link">
            <i className="bx bx-home-alt"></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="navbar-list">
          <Link to="/user/dashboard" className="navbar-link">
            <i className="bx bx-line-chart"></i>
            <span>Trades</span>
          </Link>
        </li>
        <li className="navbar-list">
          <Link to="/user/dashboard" className="navbar-link">
            <i className="bx bx-home-alt"></i>
            <span>Bot Setting</span>
          </Link>
        </li>
        <li className="navbar-list">
          <Link to="/user/dashboard" className="navbar-link">
            <i className="bx bx-news"></i>
            <span>News</span>
          </Link>
        </li>
        <li className="navbar-list">
          <Link to="/user/dashboard" className="navbar-link">
            <i className="bx bx-wallet"></i>
            <span>Account</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomBar;
