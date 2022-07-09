import React, { useRef } from "react";
import "./dropdown.css";
const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("show");
    } else {
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("show");
      }
    }
  });
};

const HeaderDropdown = (props) => {
  const dropdown_toggle = useRef(null);
  const dropdown_menu = useRef(null);
  clickOutsideRef(dropdown_menu, dropdown_toggle);
  return (
    <div className="dropdown-action">
      <button className="dropdown-button-toggle" ref={dropdown_toggle}>
        {props.btnIcon ? <i className={props.btnIcon}></i> : ""}
        {props.title ? (
          <span className="m-0 fz:13 fw-500">{props.title}</span>
        ) : (
          ""
        )}
      </button>
      <div ref={dropdown_menu} className="dropdown-content">
        {props.renderContent ? (
          <div className="dropdown-content-menu">{props.renderContent()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HeaderDropdown;
