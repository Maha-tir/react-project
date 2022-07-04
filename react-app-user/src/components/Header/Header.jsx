import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/BIDBOX-LOGO-NEW.png";
import "../../styles/app.css";
const Header = () => {
  const [slideNavbar, setSlideNavbar] = useState(false);
  const [header, setheader] = useState(false);
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
              <button className="nvcs-btn">
                <i className="fa-regular fa-bell"></i>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
