import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "../style/sidebar.css";
import sidebarItem from "../assets/jsonData/sidebar_routes.json";

const Sidebar = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");

  const history = useHistory();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setEmail(decoded.email);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        history.push("/auth/signin");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setEmail(decoded.email);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      history.push("/auth/signin");
    } catch (error) {
      console.log(error);
    }
  };

  const SidebarItem = (props) => {
    const active = props.active ? "is_active" : "";

    return (
      <Link to={props.route} className={`sidebar-list-link ${active}`}>
        <div className="sidebar-icon-link">
          <i className={props.icon}></i>
        </div>
        {props.display_name}
      </Link>
    );
  };

  const activeItem = sidebarItem.findIndex(
    (item) => item.route === props.location.pathname
  );

  return (
    <aside id="_sdX-sidebar" className={`sch-aside ${props.className}`}>
      <div className="sch-Side-header">
        <div className="sch-Side-logo">
          <h1 className="m-0" style={{ fontSize: "25px", fontWeight: 600 }}>
            Admin Trader
          </h1>
        </div>
        <Link to="/admin/profile" className="sch-Side-profile">
          <div className="avatar-sm">
            {/* <img src="" alt="_profile" className="img-profile" /> */}
          </div>
          <div className="profile-info">
            <h2 className="sttr-text">{name}</h2>
            <p className="sttr-text">{email}</p>
          </div>
        </Link>
      </div>
      <div className="sch-Side-content">
        <ul className="sch-Side-menu">
          {sidebarItem.map((item, idx) => (
            <li className="sidebar-list-menu" key={idx}>
              <SidebarItem
                route={item.route}
                icon={item.icon}
                display_name={item.display_name}
                active={idx === activeItem}
              />
            </li>
          ))}
          <li className="sidebar-list-menu">
            <button onClick={Logout} className="sidebar-list-link link-btn">
              <div className="sidebar-icon-link">
                <i className="bx bx-power-off"></i>
              </div>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
