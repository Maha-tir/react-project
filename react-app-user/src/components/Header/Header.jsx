import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/BIDBOX-LOGO-NEW.png";
import "../../styles/app.css";
import Sidebar from "../Sidebar/Sidebar";
const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [header, setheader] = useState(false);
  const changeHeader = () => {
    if (window.scrollY >= 14) {
      setheader(true);
    } else {
      setheader(false);
    }
  };
  window.addEventListener("scroll", changeHeader);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const hideSidebar = () => {
    setSidebar(false);
  };

  return (
    <React.Fragment>
      <header
        className={header ? "sc-sticky-header sticky" : "sc-sticky-header"}
      >
        <div className="logo-app">
          {/* <img src={Logo} alt="_Bidbox-logo" /> */}
        </div>
        <nav className="navbar">
          <ul className="nav-menu m-0 p-0">
            <li className="list-menu">
              <button className="nvcs-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </li>
            <li className="list-menu">
              <button className="nvcs-btn" onClick={toggleSidebar}>
                <i className="fa-regular fa-bell"></i>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <Sidebar
        onSidebar={hideSidebar}
        className={sidebar ? "show-sidebar" : "hide-sidebar"}
      />
    </React.Fragment>
  );
};

export default Header;
