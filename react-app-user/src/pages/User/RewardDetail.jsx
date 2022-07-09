import React from "react";
import { Link } from "react-router-dom";
import HeaderDropdown from "../../components/Dropdown/HeaderDropdown";
const RewardDetail = () => {
  const backHistory = () => {
    window.history.back();
  };

  const renderUserMenu = (item, index) => (
    <Link to="/" key={index} className="list-item-sm">
      {/* <i className={item.icon}></i> */}
      {/* <span>{item.content}</span> */}
      <span>ClassName</span>
    </Link>
  );
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className=" me-auto">Reward Detail</span>
        <HeaderDropdown
          btnIcon="fa-solid fa-ellipsis-vertical"
          renderContent={() => (
            <div className="dropdown-list">
              <button className="list-btn active">All</button>
              <button className="list-btn">Dirrect Activation</button>
              <button className="list-btn">Team Activation</button>
              <button className="list-btn">Peer Activation</button>
              <button className="list-btn">Dirrect Profit Sharing</button>
              <button className="list-btn">Team Profit Sharing</button>
              <button className="list-btn">Peer Profit Sharing</button>
              <button className="list-btn">Global Deviden Activation</button>
              <button className="list-btn">
                Global Deviden Profit Sharing
              </button>
            </div>
          )}
        />
      </header>
      <div className="dbhs-content">
        <div className="card mb-2">
          <div className="card-height-lg bg-primary">
            <div className="card-body row h:100">
              <div className="box-grid:2">
                <div className="nav nav-column">
                  <p className="m-0 fz:15 fw-600 text-dark">Today Profit</p>
                  <h2 className="m-0 fz:17 fw-600 text-white">222 USDT</h2>
                  <p className="m-0 fz:11 text-white">= 3.210.000 IDR</p>
                </div>
                <div className="nav nav-column">
                  <p className="m-0 fz:15 fw-600 text-dark text-center">
                    Cumulative Profit
                  </p>
                  <h2 className="m-0 fz:17 fw-600 text-white text-center">
                    222 USDT
                  </h2>
                  <p className="m-0 fz:11 text-white text-center">
                    = 3.210.000 IDR
                  </p>
                </div>
              </div>
              <p className="fz:14 text-center w:100 text-white mb-0 mt-2">
                Data within 24 hours might not be real time.
              </p>
              <p className="fz:14 text-center w:100 text-white m-0">
                Data is shown under Singapore time. (UTC+8)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardDetail;
