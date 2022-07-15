import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sidebar.css";
const Sidebar = ({ className, onSidebar }) => {
  return (
    <div className={`sidebar-notification ${className}`}>
      <div className="sidebar-header">
        <p className="m-0 fz:14 fw-600 text-dark">Notifications</p>
        <button className="close-btn" onClick={onSidebar}>
          <span
            className="fz:13 fw-600 me-2 text-dark"
            style={{ marginBottom: "1px" }}
          >
            Close
          </span>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div className="sidebar-content">
        <ul className="list-group">
          <li className="list-news-item">
            <Link to="/user/dashboard" className="list-link">
              <div className="list-link-icon">
                <i className="fa-solid fa-envelope-open-text list-icon"></i>
              </div>
              <div className="notification-details">
                <h2 className="sttr-text mb-1 fz:17 fw-500 text-dark">
                  Order Message
                </h2>
                <p className="sttr-text mb-0 fz:13 fw-400 text-mute">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, aliquam nostrum maiores placeat eum repellendus.
                </p>
                <p className="date-news">2022-05-26</p>
              </div>
            </Link>
          </li>
          <li className="list-news-item">
            <Link to="/user/dashboard" className="list-link">
              <div className="list-link-icon">
                <i className="fa-solid fa-bullhorn list-icon"></i>
              </div>
              <div className="notification-details">
                <h2 className="sttr-text mb-1 fz:17 fw-500 text-dark">
                  System Information
                </h2>
                <p className="sttr-text mb-0 fz:13 fw-400 text-mute">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, aliquam nostrum maiores placeat eum repellendus.
                </p>
                <p className="date-news">2022-05-30</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
