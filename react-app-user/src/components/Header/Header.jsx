import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/BIDBOX-LOGO-NEW.png";
import "../../styles/app.css";
const Header = () => {
  const [slideNavbar, setSlideNavbar] = useState(false);

  const SidebarItem = () => {
    return (
      <div className="slide-navbar">
        <h1>nav menu</h1>
      </div>
    );
  };

  return (
    <React.Fragment>
      <header className="sc-sticky-header">
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
              <button
                className="nvcs-btn"
                onClick={() => setSlideNavbar(!slideNavbar)}
              >
                <i className="fa-regular fa-bell"></i>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {slideNavbar ? <SidebarItem /> : null}
    </React.Fragment>
  );
};

export default Header;
