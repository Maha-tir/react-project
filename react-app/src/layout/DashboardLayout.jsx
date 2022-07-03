import React, { Component } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import jwtDecode from "jwt-decode";

import menuOutline from "../assets/plugins/ionicons/menu-outline.svg";
import searchOutline from "../assets/plugins/ionicons/search-outline.svg";

import notifications from "../assets/jsonData/notification.json";
import userMenu from "../assets/jsonData/user_menus.json";

import Dropdown from "../components/Dropdown/Dropdown";

import "../style/dashboard.css";

const renderNotificationItem = (item, index) => (
  <Link to="/notification:id" className="notification-items" key={index}>
    <div className="notification-icon" name={item.icon}>
      <i className={item.icon}></i>
    </div>
    <p className="sttr-2 drp-text">{item.content}</p>
  </Link>
);

const renderUserMenu = (item, index) => (
  <Link to={item.url} key={index} className="list-item-sm">
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </Link>
);

const axiosJWT = axios.create();

export class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
      name: "",
      email: "",
      token: "",
      expire: "",
    };
    this.toggleButton = this.toggleButton.bind(this);
  }

  // refreshToken = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/token");
  //     this.setState({ token: response.data.accessToken });
  //     const decoded = jwtDecode(response.data.accessToken);
  //     this.setState({ name: decoded.name });
  //     this.setState({ email: decoded.email });
  //     this.setState({ expire: decoded.exp });
  //   } catch (error) {
  //     if (error.response) {
  //       this.props.history.push("/auth/sigin");
  //     }
  //   }
  // };

  // componentDidMount() {
  //   this.refreshToken();
  //   axiosJWT.interceptors.request.use(
  //     async (config) => {
  //       const currentDate = new Date();
  //       if (this.state.expire * 1000 < currentDate.getTime()) {
  //         const response = await axios.get("http://localhost:5000/token");
  //         config.headers.Authorization = `Bearer ${response.data.accessToken}`;
  //         this.setState({ token: response.data.accessToken });
  //         const decoded = jwtDecode(response.data.accessToken);
  //         this.setState({ name: decoded.name });
  //         this.setState({ email: decoded.email });
  //         this.setState({ expire: decoded.exp });
  //       }
  //       return config;
  //     },
  //     (error) => {
  //       return Promise.reject(error);
  //     }
  //   );
  // }

  toggleButton() {
    this.setState({ sidebar: !this.state.sidebar });
  }

  // getUsers = async () => {
  //   const response = await axiosJWT.get("http://localhost:5000/users", {
  //     headers: {
  //       Authorization: `Bearer ${this.state.token}`,
  //     },
  //   });
  //   console.log(response.data);
  // };

  render() {
    return (
      <div className="sc-HxWqlk SfaqS">
        <header className="sch-das-header">
          <button className="sch-das-btn" onClick={this.toggleButton}>
            <img src={menuOutline} alt="_menu-bar" className="img-icon" />
          </button>
          <div className="search-wrapper">
            <div className="search-group">
              <button className="search-button">
                <ion-icon
                  name="search-outline"
                  className="search-icon"
                ></ion-icon>
              </button>
              <input
                type="search"
                name="search_dashboard"
                id="search_dashboard"
                placeholder="Search..."
                className="search-input"
              />
            </div>
          </div>
          <div className="ms-auto d-flex align-items-center">
            <div className="breadcrumb">
              <li className="breadcrumb-item time-shift me-3">
                <span id="time">Time Shift = 04:32 Minutes</span>
              </li>
              <li className="breadcrumb-item next-shift me-2">
                <span id="nextshift">Next Shift = ...</span>
              </li>
            </div>
            <Dropdown
              className="dropdown-button-topnav"
              title={this.state.name}
              contentData={userMenu}
              renderItems={(item, index) => renderUserMenu(item, index)}
              renderHeader={() => (
                <div className="profile-info-flx">
                  <div className="avatar-sm me-2">
                    {/* <img src="#" alt="_profile" /> */}
                  </div>
                  <div className="profile-info d-flex flex-column">
                    <p
                      className="sttr-text"
                      style={{ color: "#000", fontSize: "14px" }}
                    >
                      {this.state.name}
                    </p>
                    <p
                      className="sttr-text"
                      style={{ color: "#000", fontSize: "14px" }}
                    >
                      {this.state.email}
                    </p>
                  </div>
                </div>
              )}
              // renderFooter={() => (
              //   <button className="sch-outBn" onClick={this.Logout}>
              //     Logout
              //   </button>
              // )}
            />
          </div>
        </header>
        <Route
          render={(props) => (
            <Sidebar
              {...props}
              className={this.state.sidebar ? "sch-sHw" : "sch-not"}
            />
          )}
        />
        <div className="content-layout">
          {this.props.children}
          <div
            onClick={this.toggleButton}
            className={this.state.sidebar ? "overlay show" : "overlay"}
          ></div>
        </div>
      </div>
    );
  }
}

export default DashboardLayout;
