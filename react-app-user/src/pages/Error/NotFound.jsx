import React from "react";
import { useHistory } from "react-router-dom";
import E404 from "../../assets/img/404.png";
const NotFound = () => {
  const backHistory = () => {
    window.history.back();
  };
  let history = useHistory();
  const backHome = () => {
    history.push("/user/dashboard");
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
      </header>
      <div className="dbhs-content">
        <div className="nav jcc aic flex-column">
          <h2 className="mb-2 fz:24">404</h2>
          <h2 className="mb-2 fz:20">Page Not Found</h2>
          <img src={E404} alt="_NotFound" className="err-img" />
          <p className="mb-2 fz:14 text-center">
            This page is missing or you assembled the link incorrectly
          </p>
          <button className="btn-back" onClick={backHome}>
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
