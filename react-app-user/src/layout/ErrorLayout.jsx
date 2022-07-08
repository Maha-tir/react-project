import React from "react";

const ErrorLayout = (props) => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sch-Vxwmb _mobile">
      <div className="sch-mobile">{props.children}</div>
    </div>
  );
};

export default ErrorLayout;
