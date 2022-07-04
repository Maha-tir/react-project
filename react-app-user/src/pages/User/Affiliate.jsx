import React from "react";

const Affiliate = () => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className=" me-auto">Affiliate</span>
      </header>
    </div>
  );
};

export default Affiliate;
