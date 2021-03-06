import React from "react";

const BiometricsPin = () => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Biometrics & Pin</span>
      </header>
      <div className="dbhs-content"></div>
    </div>
  );
};

export default BiometricsPin;
