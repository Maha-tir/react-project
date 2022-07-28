import React,{ useState } from "react";

import { Link} from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";

const Account = () => {
  const dispatch = useDispatch()
  const account = useSelector(state=>state.account)

  const activate_bot = () => {
    
  }
  const doLogout = () => {
    localStorage.removeItem('bidbox_auth_info')
    dispatch({
      type:'auth/SET_STATE',
      payload:{
        token: null,
        refresh_token:null
      }
    })
  }
  return (
    <>
      <div className="header-profile">
        <div className="profile-info">
          <div className="avatar avatar-md-circle me-2"></div>
          <div className="nav flex-column">
            <h2 className="sttr-text m-0 fz:16 text-white">{account.full_name}</h2>
            <p className="sttr-text m-0 fz:13 text-white">
              ID : {account.email}
            </p>
          </div>
        </div>
        <div className="card card-absolute bg-vw-permission">
          <div className="nav align-items-center justify-content-between">
            <div className="nav flex-column">
              <h2 className="m-0 sttr-text-2 fz:15 fw-400 text-white">
                View Permission
              </h2>
              <p className="m-0 sttr-text fz:13 text-white">
                Expires on 06-06-2023
              </p>
            </div>
            <button className="btn-control py-1 px-4 fz:13 btn-control-first">
              Activate
            </button>
          </div>
        </div>
      </div>
      <div className="profile-content">
        <ul className="list-group">
          <li className="list-item">
            <Link to="/user/profile" className="list-link">
              <i className="fa-solid fa-user list-icon"></i>
              <span className="list-name">Profile</span>
            </Link>
          </li>
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
            <Link to="/user/setting" className="list-link">
              <i className="fa-solid fa-gear list-icon"></i>
              <span className="list-name">Setting</span>
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
        <div className="px-2 mb-2">
          <button className="sc-sign-btn text-uppercase mt-3" onClick={doLogout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default connect()(Account);
