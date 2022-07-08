import React from "react";
import E404 from "../../assets/img/404.svg";
const NotFound = () => {
  return (
    <div>
      <img src={E404} alt="" className="img-error" />
      <h2 className="fz:18 fw-600 text-center">Something's missing</h2>
      <p className="mb-2 fz:15 text-center">
        This page is missing or you assembled the link incorrectly
      </p>
    </div>
  );
};

export default NotFound;
