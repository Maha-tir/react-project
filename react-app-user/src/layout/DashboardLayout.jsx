import React from "react";
import BottomBar from "./BottomBar";

const DashboardLayout = (props) => {
  return (
    <div className="sch-Vxwmb">
      <div className="sch-mobile">
        {props.children}
        <BottomBar />
      </div>
    </div>
  );
};

export default DashboardLayout;
