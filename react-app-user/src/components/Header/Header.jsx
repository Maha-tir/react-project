import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/BIDBOX-LOGO-NEW.png";
import "../../styles/app.css";
import "../../styles/sidebar.css";
const Header = () => {
  const [slideNavbar, setSlideNavbar] = useState(false);
  const [header, setheader] = useState(false);

  const SidebarItem = (props) => {
    return (
      <div className={`slide-navbar ${props.className}`}>
        <button
          className="nvcs-btn"
          onClick={() => setSlideNavbar(!slideNavbar)}
        >
          <i className="fa-regular fa-bell"></i>
        </button>
        <h1>nav menu</h1>
      </div>
    );
  };

  const changeHeader = () => {
    if (window.scrollY >= 14) {
      setheader(true);
    } else {
      setheader(false);
    }
  };
  window.addEventListener("scroll", changeHeader);

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
      {slideNavbar ? (
        <SidebarItem className={slideNavbar ? "show" : "hide"} />
      ) : null}
    </React.Fragment>
  );
};

export default Header;
