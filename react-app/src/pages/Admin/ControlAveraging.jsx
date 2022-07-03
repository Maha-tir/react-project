import React from "react";

const ControlAveraging = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-wrap">
      <button className="sch-first-btn" style={{ fontSize: "1.3rem" }}>
        Start Averaging
      </button>
      <button className="sch-danger-btn mx-3" style={{ fontSize: "1.3rem" }}>
        Stop Averaging
      </button>
      <button className="sch-warning-btn" style={{ fontSize: "1.3rem" }}>
        Notification
      </button>
    </div>
  );
};

export default ControlAveraging;
