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

const Dropdown = (props) => {
  const dropdown_toggle = useRef(null);
  const dropdown_menu = useRef(null);
  clickOutsideRef(dropdown_menu, dropdown_toggle);
  return (
    <div className="dropdown">
      <button
        ref={dropdown_toggle}
        className={`dropdown-toggle ${props.className}`}
      >
        {props.icon ? <i className={props.icon}></i> : ""}
        {props.ionIcon ? <ion-icon name={props.icon}></ion-icon> : ""}
        {props.title ? (
          <span style={{ fontSize: "14px", margin: 0 }}>{props.title}</span>
        ) : (
          ""
        )}
        {props.badge ? <span className="badge-small">{props.badge}</span> : ""}
        {props.image ? (
          <div className="dropdown-image-profile">
            <img src={props.image} alt="_profile" />
          </div>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>
      <div ref={dropdown_menu} className="dropdown-content dropdown-menu">
        {props.renderHeader ? (
          <div className="dropdown-header">{props.renderHeader()}</div>
        ) : (
          ""
        )}
        {props.contentData && props.renderItems
          ? props.contentData.map((item, idx) => props.renderItems(item, idx))
          : ""}
        {props.renderFooter ? (
          <div className="dropdown-footer">{props.renderFooter()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dropdown;
