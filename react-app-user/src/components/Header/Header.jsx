import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-horizont.png";
import "../../styles/app.css";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [search, setSearch] = useState(false);
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

  const toggleSearch = () => {
    setSearch(!sidebar);
  };

  const hideSearch = () => {
    setSearch(false);
  };

  return (
    <React.Fragment>
      <header
        className={header ? "sc-sticky-header sticky" : "sc-sticky-header"}
      >
        <div className="logo-app">
          <img src={Logo} alt="_Bidbox-logo" />
        </div>
        <nav className="navbar">
          <ul className="nav-menu m-0 p-0">
            <li className="list-menu">
              <button className="nvcs-btn" onClick={toggleSearch}>
                <i className="fa-solid fa-magnifying-glass text-dark"></i>
              </button>
            </li>
            <li className="list-menu">
              <button className="nvcs-btn">
                <i className="bx bx-scan text-dark"></i>
              </button>
            </li>
            <li className="list-menu">
              <button className="nvcs-btn" onClick={toggleSidebar}>
                <i className="fa-regular fa-bell text-dark"></i>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <Sidebar
        onSidebar={hideSidebar}
        className={sidebar ? "show-sidebar" : "hide-sidebar"}
      />
      <Search onSearch={hideSearch} className={search ? "shX-vw" : "shx-vw"} />
    </React.Fragment>
  );
};

export default Header;
