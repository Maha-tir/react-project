import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/sidebar.css";
import sidebarItem from "../assets/jsonData/sidebar_routes.json";

const Sidebar = (props) => {
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
            <h2 className="sttr-text">Administrator</h2>
            <p className="sttr-text">email.example@email.com</p>
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
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
