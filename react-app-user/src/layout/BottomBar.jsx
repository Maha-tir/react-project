import React from "react";
import { Link } from "react-router-dom";

import navBar from "../assets/json/navigation_bar.json";

const BottomBar = (props) => {
  const NavbarItem = (props) => {
    const active = props.active ? "active" : "";

    return (
      <Link to={props.route} className={`navbar-link ${active}`}>
        <i className={props.icon}></i>
        <span>{props.display_name}</span>
      </Link>
    );
  };
  const activeItem = navBar.findIndex(
    (item) => item.route === props.location.pathname
  );
  return (
    <nav className="bottom-bar">
      <ul className="navbar-menu">
        {navBar.map((item, index) => (
          <li className="navbar-list" key={index}>
            <NavbarItem
              route={item.route}
              icon={item.icon}
              display_name={item.display_name}
              active={index === activeItem}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomBar;
