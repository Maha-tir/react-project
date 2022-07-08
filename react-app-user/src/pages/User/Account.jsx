import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <div className="header-profile">
        <div className="profile-info">
          <div className="avatar avatar-md-circle me-2"></div>
          <div className="nav flex-column">
            <h2 className="sttr-text m-0 fz:16 text-white">Name Of Member</h2>
            <p className="sttr-text m-0 fz:13 text-white">
              ID : example@gmail.com
            </p>
          </div>
          <button className="ms-auto btn-logout">Logout</button>
        </div>
        <div className="card card-absolute">
          <div className="nav align-items-center justify-content-between">
            <div className="nav flex-column">
              <h2 className="m-0 sttr-text-2 fz:15 fw-500">View Permission</h2>
              <p className="m-0 sttr-text fz:13">Expires on 06-06-2023</p>
            </div>
            <button className="btn-activate">Activate</button>
          </div>
        </div>
      </div>
      <div className="profile-content">
        <ul className="list-group">
          <li className="list-item">
            <Link to="/user/member-centre" className="list-link">
              <i className="fa-solid fa-users-rectangle list-icon"></i>
              <span className="list-name">Member Centre</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/user/asset" className="list-link">
              <i className="fa-solid fa-wallet list-icon"></i>
              <span className="list-name">Asset</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/user/api-binding" className="list-link">
              <i className="fa-solid fa-link list-icon"></i>
              <span className="list-name">API Binding</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/user/affiliate" className="list-link">
              <i className="fa-solid fa-users list-icon"></i>
              <span className="list-name">Affiliate</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/user/reward-detail" className="list-link">
              <i className="fa-solid fa-sack-dollar list-icon"></i>
              <span className="list-name">Reward Detail</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/user/profit-trading" className="list-link">
              <i className="fa-solid fa-chart-simple list-icon"></i>
              <span className="list-name">Profit Trading</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/user/help-support" className="list-link">
              <i className="fa-solid fa-headset list-icon"></i>
              <span className="list-name">Help/Support</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/user/settings" className="list-link">
              <i className="fa-solid fa-gear list-icon"></i>
              <span className="list-name">Settings</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/user/security" className="list-link">
              <i className="fa-solid fa-lock list-icon"></i>
              <span className="list-name">Security</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/user/user-guide" className="list-link">
              <i className="fa-solid fa-clipboard-list list-icon"></i>
              <span className="list-name">User Guide</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Account;
