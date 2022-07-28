import React from "react";
import "../../styles/toast.css";
const Taost = ({ position, type, message }) => {
  return (
    <div
      className={
        `toast-fix toast-${type} ${position}`
      }
    >
      <div className="toast-icon">
        {type === "success" ? (
          <i className="fa-solid fa-check"></i>
        ) : (
          <i className="fa-solid fa-exclamation"></i>
        )}
      </div>
      <div className="toast-body">
        <p className="mb-0 fz:14 fw-500">{message}</p>
      </div>
    </div>
  );
};

export default Taost;
