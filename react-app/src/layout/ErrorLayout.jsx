import React from "react";
import { Link } from "react-router-dom";

const ErrorLayout = (props) => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sch-error">
      <div className="sch-header-err">
        <Link to="/admin/dashboard" className="fz:16 fw-600 text-link">
          AdminTrader
        </Link>
      </div>
      <div className="nav flex-column jcc align-items-center">
        {props.children}
        <button className="btn-back-to-home" onClick={backHistory}>
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default ErrorLayout;
